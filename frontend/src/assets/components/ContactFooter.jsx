import React from 'react'

const ContactFooter = () => {
  return (
    <div className='px-20 pb-12 pt-10 flex flex-wrap gap-30 text-lg text-[var(--green)]'>
      <div>
        <h2 className = 'font-bold text-xl'>Contact Us:</h2>
        <p>Address: </p>
        <p>Email: </p>
        <p>Phone No.: </p>
      </div>
      <div>
        <h2 className = 'font-bold text-xl'>Social Media:</h2>
        <a href='https://www.instagram.com/vraj_farm_/' target="_blank">Instagram</a>
      </div>
    </div>
  )
}

export default ContactFooter
