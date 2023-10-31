import React, { useState } from 'react'

const Switcher2 = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div className='h-5 w-14 rounded-full bg-[#E5E7EB] shadow-inner'></div>
          <div className='dot shadow-switch-1 absolute left-0 -top-1 h-7 w-7 rounded-full bg-white transition'></div>
        </div>
      </label>
    </>
  )
}

export default Switcher2
