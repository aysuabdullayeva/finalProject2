import Link from "next/link";
import React from 'react'
import "./bookBtn.css"
const BookBtn = () => {
  return (
    <div>
      <Link href="/FormRegister" className='myTripBtn'>
      Book Your Trip
      </Link>
    </div>
  )
}

export default BookBtn;