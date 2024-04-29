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
      <BadgesItem roundedFull bgOpacity>
        Warning
      </BadgesItem>
      <BadgesItem bgOpacity>
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
      className={`inline-block rounded py-1 px-2.5 text-xs font-medium ${
        outline
          ? `border ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-yellow-dark/10`)
            } border-yellow-dark text-yellow-dark`
          : `bg-yellow-dark ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-yellow-dark/10`)
            } text-white`
      } ${bgOpacity && '!bg-yellow-dark/10 !text-yellow-dark'}
`}
    >
      {children}
    </span>
  )
}
