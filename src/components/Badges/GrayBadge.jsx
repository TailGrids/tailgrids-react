import React from 'react'

const GrayBadge = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <BadgesItem roundedMd>Gray</BadgesItem>
      <BadgesItem outline roundedMd>
        Gray
      </BadgesItem>
      <BadgesItem roundedFull>Gray</BadgesItem>
      <BadgesItem outline roundedFull>
        Gray
      </BadgesItem>
      <BadgesItem roundedFull outline bgOpacity>
        Gray
      </BadgesItem>
      <BadgesItem outline bgOpacity>
        Gray
      </BadgesItem>
    </div>
  )
}

export default GrayBadge

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
              (bgOpacity && `bg-warning/5`)
            } border-body-color text-body-color`
          : `bg-body-color ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-warning/5`)
            } text-white`
      } ${bgOpacity && 'bg-body-color/5'}
`}
    >
      {children}
    </span>
  )
}
