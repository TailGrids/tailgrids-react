import React from 'react'

const PrimaryBadge = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <BadgesItem roundedMd>Primary</BadgesItem>
      <BadgesItem outline roundedMd>
        Primary
      </BadgesItem>
      <BadgesItem roundedFull>Primary</BadgesItem>
      <BadgesItem outline roundedFull>
        Primary
      </BadgesItem>
      <BadgesItem roundedFull outline bgOpacity>
        Primary
      </BadgesItem>
      <BadgesItem outline bgOpacity>
        Primary
      </BadgesItem>
    </div>
  )
}

export default PrimaryBadge

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
            } border-primary text-primary`
          : `bg-primary ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-primary/5`)
            } text-white`
      } ${bgOpacity && 'bg-primary/5'}
`}
    >
      {children}
    </span>
  )
}