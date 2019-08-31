const { Storage } = require("@google-cloud/storage")
const path = require("path")
const googleGloud = new Storage({
  keyFilename: path.join(__dirname, "..", "..", "google-storage-service.json"),
  projectId: "optimum-tensor-251513",
})

//testing
// googleGloud.getBuckets().then(b => console.log(b))

const wilfredFiles = googleGloud.bucket("files-wilfred")

const resolvers = {
  Query: {
    files: async () => {
      const files = []
      await wilfredFiles.getFiles().then(async f => {
        await f.forEach(bucket => {
          bucket.forEach(file => files.push(file.name))
        })
      })
      return files
    },
  },
  Mutation: {
    uploadFile: async (_, { file }) => {
      const { createReadStream, filename } = await file

      await new Promise(res =>
        createReadStream()
          // .pipe(createWriteStream(path.join(__dirname, "../images", filename)))
          .pipe(
            wilfredFiles
              .file(filename)
              .createWriteStream({
                resumable: false,
                gzip: true,
              })
              .on("finish", res),
          )
          .on("close", res),
      )

      files.push(filename)

      return true
    },
  },
}

module.exports = resolvers
