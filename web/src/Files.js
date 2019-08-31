import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import React from "react"
import config from "./config"

export const filesQuery = gql`
  {
    files
  }
`

export const Files = () => {
  const { data, loading } = useQuery(filesQuery)

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <React.Fragment>
      <h2>This are files uploaded to {`${config.GOOGLE_GLOUD_STORAGE_URL}`}</h2>

      <div className="display-area">
        {data.files.map(x => (
          <div className="display-area_item">
            <img
              style={{ width: 200 }}
              key={x}
              src={`${config.GOOGLE_GLOUD_STORAGE_URL}/${x}`}
              alt={x}
            />
            <a href={`${config.GOOGLE_GLOUD_STORAGE_URL}/${x}`} target="_blank">
              Download
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}
