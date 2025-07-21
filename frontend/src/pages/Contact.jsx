import React from 'react'
import ContactFooter from '../assets/components/ContactFooter'

const Contact = () => {
  return (
    <div>
      <div className="items-center sm:px-20 pt-5 pb-10 border-b border-gray-300">
        <h1 className="text-center text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold bg-gradient-to-b from-[var(--green)] to-[var(--brown)] bg-clip-text text-transparent px-5">
          FAQs
        </h1>
        <div className='p-10 sm:text-[1rem] md:text-[1.5rem] text-justify text-[var(--black)]'>
          <p className = 'font-bold'>
            1. Do you deliver to all places in India?
          </p>
          <p className = 'pl-5'>
           The answer here.
          </p>
        </div>

        <div className='px-10 py-5 sm:text-[1rem] md:text-[1.5rem] text-justify text-[var(--black)]'>
          <p className = 'font-bold'>
            1. What is your return/ refund policy?
          </p>
          <p className = 'pl-5'>
           The answer here.
          </p>
        </div>
        

        <p className = 'p-10 sm:text-[1rem] md:text-[1.5rem] text-justify text-[var(--black)]'>
          In case of any other queries, contact us via phone or email.
        </p>
      </div>

      <ContactFooter />
    </div>
  )
}

export default Contact
