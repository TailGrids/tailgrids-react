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
      <BadgesItem roundedFull bgOpacity>
        Info
      </BadgesItem>
      <BadgesItem bgOpacity>
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
      className={`inline-block rounded py-1 px-2.5 text-xs font-medium ${
        outline
          ? `border ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-cyan/10`)
            } border-cyan text-cyan`
          : `bg-cyan ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-cyan/10`)
            } text-white`
      } ${bgOpacity && 'bg-cyan/10 text-cyan'}
`}
    >
      {children}
    </span>
  )
}
