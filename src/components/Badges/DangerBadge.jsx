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
      <BadgesItem roundedFull outline bgOpacity>
        Danger
      </BadgesItem>
      <BadgesItem outline bgOpacity>
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
      className={`inline-block rounded py-1 px-3 text-sm font-semibold ${
        outline
          ? `border ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-info/5`)
            } border-danger text-danger`
          : `bg-danger ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-danger/5`)
            } text-white`
      } ${bgOpacity && 'bg-danger/5'}
`}
    >
      {children}
    </span>
  )
}