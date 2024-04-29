import React from 'react';

const Avatar6 = () => {
  return (
    <>
      <section className='bg-white dark:bg-dark py-[75px]'>
        <div className='mx-auto px-4 sm:container'>
          <div className='flex items-end justify-center space-x-2 sm:space-x-5'>
            <AvatarItem
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-01.jpg'
              size='6'
              bulletSize='[7px]'
              bulletPosition='0.5'
              border='border'
              active
            />
            <AvatarItem
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-02.jpg'
              size='[38px]'
              bulletSize='3'
              bulletPosition='1'
              border='border-2'
              active
            />
            <AvatarItem
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-03.jpg'
              size='[42px]'
              bulletSize='[13px]'
              bulletPosition='[6px]'
              border='border-[2.3px]'
              active
            />
            <AvatarItem
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-04.jpg'
              size='[52px]'
              bulletSize='[15px]'
              bulletPosition='[6px]'
              border='border-[2.7px]'
            />
            <AvatarItem
              img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-05.jpg'
              size='20'
              bulletSize='[18px]'
              bulletPosition='2'
              border='border-[3px]'
              active
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Avatar6

const AvatarItem = ({ img, size, bulletSize, bulletPosition, active, border }) => {
  return (
    <div className={`h-${size} w-${size} relative`}>
      <img
        src={img}
        alt='avatar'
        className='h-full w-full object-cover object-center'
      />
      <span
        className={`bg-${
          active ? '[#219653]' : '[#DC3545]'
        } absolute -top-${bulletPosition} -right-${bulletPosition} block h-${bulletSize} w-${bulletSize} rounded-full ${border} border-white dark:border-dark`}
      ></span>
    </div>
  )
}

