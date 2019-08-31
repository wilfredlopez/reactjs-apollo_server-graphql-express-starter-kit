# TO GET CLOUD STORAGE

    a) Go to google gloud account or create one:

    https://console.cloud.google.com/storage/browser?folder=&organizationId=&project=optimum-tensor-251513

    b) Create a bucket or go to existing bucket:

    - On the Bucket go to Permissions and anable permissions to allusers using add Members and Storage Object Viewer as a role.
    - Go to API & Services and create credentials as "Service Account Key". then download the json file and included in the root directory of the project. add it to .gitignore for security purpuses.

#Link the credentials JSON file to the api

    - under graphql/resolvers require the credentials json file.
