import React, { useState } from 'react'

const Checkbox1 = () => {
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
        <div className='box mr-4 flex h-5 w-5 items-center justify-center rounded border-stroke dark:border-dark-3 border'>
          <span className={`dot h-[10px] w-[10px] rounded-sm ${isChecked && 'bg-primary'}`}></span>
        </div>
      </div>
      Checkbox Text
    </label>
  )
}

export default Checkbox1