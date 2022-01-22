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
                email
                summary
                profiles {
                  network
                  url
                  username
                }
                location {
                  countryCode
                }
              }
              education {
                institution
                area
                studyType
                startDate
                endDate
              }
              languages {
                language
                fluency
              }
              skills {
                name
                level
              }
              work {
                name
                position
                startDate
                endDate
                summary
              }
            }
          }
        }
    }
  `)

  const info = data.allDataJson.edges[0].node
  console.log(info)

  return (
    <ul>
      {
        // basics.profiles.map(profile => {
        //   return (
        //     <li key={profile.network}>
        //       <a href={profile.url} target="_blank" rel="noreferrer">
        //         {profile.network}
        //       </a>
        //     </li>
        //   )
        // })
      }
    </ul>
  )

}

export default Resume