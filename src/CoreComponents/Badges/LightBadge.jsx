import React from 'react'

const LightBadge = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <BadgesItem roundedMd>Light</BadgesItem>
      <BadgesItem outline roundedMd>
        Light
      </BadgesItem>
      <BadgesItem roundedFull>Light</BadgesItem>
      <BadgesItem outline roundedFull>
        Light
      </BadgesItem>
      <BadgesItem roundedFull bgOpacity>
        Light
      </BadgesItem>
      <BadgesItem bgOpacity>
        Light
      </BadgesItem>
    </div>
  )
}

export default LightBadge

const BadgesItem = ({
  children,
  outline,
  roundedFull,
  roundedLg,
  roundedNone,
  roundedSm,
  roundedMd,
  bgOpacity,
}) => {
  return (
    <span
      className={`inline-block rounded py-1 px-2.5 text-xs font-medium ${
        outline
          ? `border ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-gray-3/50`)
            } border-light text-dark dark:text-light`
          : `bg-gray-3 ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-gray-3/50`)
            } text-dark`
      } ${bgOpacity && 'bg-gray-3/50'}
`}
    >
      {children}
    </span>
  )
}