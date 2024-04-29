import React, { useState, useEffect, useRef } from 'react'

const Avatar9 = () => {
  return (
    <>
      <section className='bg-white dark:bg-dark py-[75px]'>
        <div className='mx-auto px-4 sm:container'>
          <div className='-mx-4 flex flex-wrap justify-center'>
            <AvatarItem
              active
              name='Devid Milinear'
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-05.jpg'
            >
              <DropdownItem link='/#'>Profile</DropdownItem>
              <DropdownItem link='/#'>Settings</DropdownItem>
              <DropdownItem link='/#'>Sign Out</DropdownItem>
            </AvatarItem>
            <AvatarItem
              active
              arrow
              name='Devid Milinear'
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-05.jpg'
            >
              <DropdownItem link='/#'>Profile</DropdownItem>
              <DropdownItem link='/#'>Settings</DropdownItem>
              <DropdownItem link='/#'>Sign Out</DropdownItem>
            </AvatarItem>
            <AvatarItem
              arrow
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-05.jpg'
            >
              <DropdownItem link='/#'>Profile</DropdownItem>
              <DropdownItem link='/#'>Settings</DropdownItem>
              <DropdownItem link='/#'>Sign Out</DropdownItem>
            </AvatarItem>
          </div>
        </div>
      </section>
    </>
  )
}

export default Avatar9

const AvatarItem = ({ img, name, arrow, active, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef(null)
  const dropdown = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className='mb-8 w-full px-4 md:w-1/2 lg:w-1/3'>
      <div className='relative inline-block'>
        <button
          className='flex items-center text-left'
          ref={trigger}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className='relative mr-4 h-[42px] w-[42px] rounded-full'>
            <img
              src={img}
              alt='avatar'
              className='h-full w-full rounded-full object-cover object-center'
            />
            <span
              className={`absolute -top-0.5 -right-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white dark:border-dark ${
                active ? 'bg-[#219653]' : 'bg-red'
              } `}
            ></span>
          </div>
          {name && (
            <span className='text-base font-medium text-dark dark:text-white'>{name}</span>
          )}
          {arrow && (
            <span className='pl-[10px] text-dark dark:text-white'>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z" />
              </svg>
            </span>
          )}
        </button>
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className={`shadow-card dark:shadow-box-dark absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white dark:bg-dark-2 p-2 ${
            dropdownOpen === true ? 'block' : 'hidden'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

const DropdownItem = ({ link, children }) => {
  return (
    <a
      href={link}
      className='text-body-color dark:text-dark-6 hover:bg-gray-2 dark:hover:bg-dark-3 block w-full rounded py-2 px-3 text-left text-sm'
    >
      {children}
    </a>
  )
}
