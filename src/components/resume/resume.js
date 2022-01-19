import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
        allDataJson {
        edges {
            node {
            basics {
                name
                profiles {
                  network
                  url
                }
            }
            }
        }
        }
    }
  `)

  const info = data.allDataJson.edges[0].node
  const { basics } = info

  return (
    <ul>
      {
        basics.profiles.map(profile => {
          return (
            <li key={profile.network}>
              <a href={profile.url} target="_blank">
                {profile.network}
              </a>
            </li>
          )
        })
      }
    </ul>
  )

}

export default Resume