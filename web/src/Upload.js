import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"
import { filesQuery } from "./Files"

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`

export const Upload = () => {
  const [uploadFile] = useMutation(uploadFileMutation, {
    refetchQueries: [{ query: filesQuery }],
  })
  const onDrop = useCallback(
    ([file]) => {
      uploadFile({ variables: { file } })
    },
    [uploadFile],
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <React.Fragment>
      <h1>This is a drag and drop to upload files to the server</h1>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="drop-area">Drop the files here ...</p>
        ) : (
          <p className="drop-area">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
    </React.Fragment>
  )
}
