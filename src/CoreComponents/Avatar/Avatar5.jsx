import React from 'react';

const Avatar5 = () => {
  return (
    <>
      <section className='bg-white dark:bg-dark py-[75px]'>
        <div className='mx-auto px-4 sm:container'>
          <div className='flex items-end justify-center space-x-2 sm:space-x-5'>
            <AvatarItem
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-01.jpg'
              size='6'
              bulletSize='[7px]'
              border='border'
              active
            />
            <AvatarItem
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-02.jpg'
              size='[38px]'
              bulletSize='3'
              border='border-2'
              active
            />
            <AvatarItem
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-03.jpg'
              size='[42px]'
              bulletSize='[13px]'
              border='border-[2.3px]'
              active
            />
            <AvatarItem
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-04.jpg'
              size='[52px]'
              bulletSize='[15px]'
              border='border-[2.7px]'
            />
            <AvatarItem
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-05.jpg'
              size='20'
              bulletSize='[18px]'
              border='border-[3px]'
              active
            />
          </div>
        </div>
      </section>
    </>
  )
}


export default Avatar5

const AvatarItem = ({ img, size, bulletSize, active, border }) => {
  return (
    <div
      className={`h-${size} w-${size} relative rounded-full`}
    >
      <img
        src={img}
        alt='avatar'
        className='h-full w-full rounded-full object-cover object-center'
      />
      <span
        className={`bg-${
          active ? '[#219653]' : '[#DC3545]'
        } absolute top-0 right-0 block h-${bulletSize} w-${bulletSize} rounded-full ${border} border-white dark:border-dark`}
      ></span>
    </div>
  )
}


