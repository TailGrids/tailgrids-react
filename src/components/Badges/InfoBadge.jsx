import React from 'react'

const InfoBadge = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <BadgesItem roundedMd>Info</BadgesItem>
      <BadgesItem outline roundedMd>
        Info
      </BadgesItem>
      <BadgesItem roundedFull>Info</BadgesItem>
      <BadgesItem outline roundedFull>
        Info
      </BadgesItem>
      <BadgesItem roundedFull outline bgOpacity>
        Info
      </BadgesItem>
      <BadgesItem outline bgOpacity>
        Info
      </BadgesItem>
    </div>
  )
}

export default InfoBadge

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
            } border-info text-info`
          : `bg-info ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-info/5`)
            } text-white`
      } ${bgOpacity && 'bg-info/5'}
`}
    >
      {children}
    </span>
  )
}
