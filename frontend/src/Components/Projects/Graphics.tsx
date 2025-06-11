import React from 'react'
import SubHeader from '../SubHeader'
import Gallery from '../Gallery'
import { Images } from '../../Content/Projects/Graphics'

const Graphics: React.FC = () => {
  return (
    <>
      <SubHeader text="Graphics" />
      <Gallery images={Images} />
    </>
  )
}

export default Graphics
