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
      <BadgesItem roundedFull bgOpacity>
        Gray
      </BadgesItem>
      <BadgesItem bgOpacity>
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
      className={`inline-block rounded py-1 px-2.5 text-xs font-medium ${
        outline
          ? `border ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-body-color/10 dark:bg-gray/10`)
            } border-body-color text-body-color`
          : `bg-body-color ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-body-color/10 dark:bg-gray/10`)
            } text-white`
      } ${bgOpacity && 'bg-body-color/10 dark:bg-gray/10'}
`}
    >
      {children}
    </span>
  )
}
