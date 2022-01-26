import React from 'react'

import loadable from "@loadable/component";

const ResumeFrame = loadable(() => import('./ResumeFrame'))

const Resume = ({ resume }) => {
  return (
    <ResumeFrame fallback={<div>Loading...</div>}/>
  )
};

export default Resume