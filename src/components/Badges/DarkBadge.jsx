import React from 'react'

const DarkBadge = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <BadgesItem roundedMd>Dark</BadgesItem>
      <BadgesItem outline roundedMd>
        Dark
      </BadgesItem>
      <BadgesItem roundedFull>Dark</BadgesItem>
      <BadgesItem outline roundedFull>
        Dark
      </BadgesItem>
      <BadgesItem roundedFull outline bgOpacity>
        Dark
      </BadgesItem>
      <BadgesItem outline bgOpacity>
        Dark
      </BadgesItem>
    </div>
  )
}

export default DarkBadge

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
              (bgOpacity && `bg-dark/5`)
            } border-dark text-dark`
          : `bg-dark ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-dark/5`)
            } text-white`
      } ${
        bgOpacity && 'bg-dark/5'
      }
`}
    >
      {children}
    </span>
  )
}