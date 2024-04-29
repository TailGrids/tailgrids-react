import React from 'react'

const DarkRoundedButton = () => {
  return (
    <button className='bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
      Get Started
    </button>
  )
}

export default DarkRoundedButton