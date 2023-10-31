import React from 'react'

const WarningBadge = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <BadgesItem roundedMd>Warning</BadgesItem>
      <BadgesItem outline roundedMd>
        Warning
      </BadgesItem>
      <BadgesItem roundedFull>Warning</BadgesItem>
      <BadgesItem outline roundedFull>
        Warning
      </BadgesItem>
      <BadgesItem roundedFull outline bgOpacity>
        Warning
      </BadgesItem>
      <BadgesItem outline bgOpacity>
        Warning
      </BadgesItem>
    </div>
  )
}

export default WarningBadge

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
            } border-warning text-warning`
          : `bg-warning ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-warning/5`)
            } text-dark`
      } ${bgOpacity && 'bg-warning/5'}
`}
    >
      {children}
    </span>
  )
}
