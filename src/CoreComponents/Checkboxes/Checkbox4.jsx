import React, { useState } from 'react'

const Checkbox4 = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className='flex items-center cursor-pointer select-none text-dark dark:text-white'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div className='box mr-4 flex h-5 w-5 items-center justify-center rounded-full border border-stroke dark:border-dark-3'>
          <span
            className={`h-[10px] w-[10px] rounded-full ${
              isChecked ? 'bg-primary' : 'bg-transparent'
            }`}
          >
            {' '}
          </span>
        </div>
      </div>
      Checkbox Text
    </label>
  )
}

export default Checkbox4
