import React, { useState } from 'react'

const Switcher5 = () => {
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
          <div
            className={`dot shadow-switch-1 absolute left-0 -top-1 flex h-7 w-7 items-center justify-center rounded-full transition ${
              isChecked ? '!bg-white' : 'bg-white'
            }`}
          >
            <span
              className={`active h-4 w-4 rounded-full  ${
                isChecked ? 'bg-primary' : 'bg-[#E5E7EB]'
              }`}
            ></span>
          </div>
        </div>
      </label>
    </>
  )
}

export default Switcher5
