import React from 'react'

const DangerBadge = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <BadgesItem roundedMd>Danger</BadgesItem>
      <BadgesItem outline roundedMd>
        Danger
      </BadgesItem>
      <BadgesItem roundedFull>Danger</BadgesItem>
      <BadgesItem outline roundedFull>
        Danger
      </BadgesItem>
      <BadgesItem roundedFull bgOpacity>
        Danger
      </BadgesItem>
      <BadgesItem bgOpacity>
        Danger
      </BadgesItem>
    </div>
  )
}

export default DangerBadge

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
              (bgOpacity && `bg-red-dark/10`)
            } border-red-dark text-red-dark`
          : `bg-red-dark ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-red-dark/10`)
            } text-white`
      } ${bgOpacity && 'bg-red-dark/10 !text-red-dark'}
`}
    >
      {children}
    </span>
  )
}