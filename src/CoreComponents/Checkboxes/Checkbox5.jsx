import React, { useState } from 'react'

const Checkbox5 = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className='flex cursor-pointer select-none items-center text-dark dark:text-white'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div className={`box border-primary mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${isChecked && 'bg-primary'}`}>
          <span
            className='h-[10px] w-[10px] rounded-full bg-white dark:bg-dark'
          >
            {' '}
          </span>
        </div>
      </div>
      Checkbox Text
    </label>
  )
}

export default Checkbox5
