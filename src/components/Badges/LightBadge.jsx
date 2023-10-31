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
      <BadgesItem roundedFull outline bgOpacity>
        Light
      </BadgesItem>
      <BadgesItem outline bgOpacity>
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
      className={`inline-block rounded py-1 px-3 text-sm font-semibold ${
        outline
          ? `border ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-info/5`)
            } border-light text-black`
          : `bg-light ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-light/5`)
            } text-black`
      } ${bgOpacity && 'bg-light/5'}
`}
    >
      {children}
    </span>
  )
}