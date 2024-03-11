'use client'

import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import classNames from 'classnames'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={classNames(
      'peer inline-flex h-auto w-10 p-0.5 background-base shadow-[2px_2px_0_0_rgba(0,0,0,1)] shrink-0 cursor-pointer items-center rounded-full border border-black  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:background-base',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={classNames(
        'pointer-events-none transition-colors block h-4 w-4 border border-black rounded-full data-[state=unchecked]:bg-white data-[state=checked]:bg-white ring-0 transition-transform data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
