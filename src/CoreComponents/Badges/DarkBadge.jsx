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
      <BadgesItem roundedFull bgOpacity>
        Dark
      </BadgesItem>
      <BadgesItem bgOpacity>
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
      className={`inline-block rounded py-1 px-2.5 text-xs font-medium ${
        outline
          ? `border ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-dark/10`)
            } border-dark text-dark dark:text-dark-4 dark:border-dark-4`
          : `bg-dark dark:bg-dark-2 ${
              (roundedFull && `rounded-full`) ||
              (roundedLg && `rounded-lg`) ||
              (roundedNone && `rounded-none`) ||
              (roundedSm && `rounded-sm`) ||
              (roundedMd && `rounded-md`) ||
              (bgOpacity && `bg-dark/10`)
            } text-white`
      } ${
        bgOpacity && 'bg-dark/10'
      }
`}
    >
      {children}
    </span>
  )
}