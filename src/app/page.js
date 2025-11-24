import Countries from '@/sections/AboutCountries/Countries';
import Home from '@/sections/Home/Home';
import OurClient from '@/sections/OurClient/OurClient';
import Travel from '@/sections/Travel/Travel';
import React from 'react'
import Scroll from '@/Component/ScrollPage/Scroll';



const page = () => {
  return (
    <div>
      <Scroll/>
      <Home />
      <Travel />
      <Countries />
      <OurClient />
    </div>
  )
}

export default page;