import React from 'react'
import Swiperslider from '../Components/Swiperslide'
import { slider_images } from '../util'


export default function Home() {
  return (
    <>
    <Swiperslider data={slider_images}>  </Swiperslider>
    </>
  )
}
// research: sharing components as props