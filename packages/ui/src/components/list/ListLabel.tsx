import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

export interface ListLabelProps {
  children: ReactNode
  className?: string
}

export const ListLabel: FC<ListLabelProps> = ({ children, className }) => {
  return (
    <span
      className={classNames(
        className,
        'flex justify-start text-xs font-medium color-base px-2',
      )}
    >
      {children}
    </span>
  )
}
