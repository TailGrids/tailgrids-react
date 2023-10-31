import React from 'react'

const SuccessBadge = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <BadgesItem roundedMd>Success</BadgesItem>
      <BadgesItem outline roundedMd>
        Success
      </BadgesItem>
      <BadgesItem roundedFull>Success</BadgesItem>
      <BadgesItem outline roundedFull>
        Success
      </BadgesItem>
      <BadgesItem roundedFull outline bgOpacity>
        Success
      </BadgesItem>
      <BadgesItem outline bgOpacity>
        Success
      </BadgesItem>
    </div>
  )
}

export default SuccessBadge

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
            } border-success text-success`
          : `bg-success ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-success/5`)
            } text-white`
      } ${bgOpacity && 'bg-success/5'}
`}
    >
      {children}
    </span>
  )
}