import React from 'react';

const Avatar8 = () => {
  return (
    <>
      <section className='bg-white dark:bg-dark py-[75px]'>
        <div className='mx-auto px-4 sm:container'>
          <div className='flex items-end justify-center'>
            <AvatarItem img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-01.jpg' />
            <AvatarItem img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-02.jpg' />
            <AvatarItem img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-03.jpg' />
            <AvatarItem img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-04.jpg' />
            <AvatarItem img='https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-05.jpg' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Avatar8

const AvatarItem = ({ img }) => {
  return (
    <div className='group group-first:ml-0 -ml-4 h-[50px] w-[50px] rounded-full border-4 border-white dark:border-dark-3'>
      <img
        src={img}
        alt='avatar'
        className='h-full w-full rounded-full object-cover object-center'
      />
    </div>
  )
}

