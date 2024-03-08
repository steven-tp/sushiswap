import { type VariantProps, cva } from 'class-variance-authority'
import Link from 'next/link'
import * as React from 'react'

import classNames from 'classnames'
import { U2DexIcon } from './icons/U2DexIcon'
import { navigationMenuTriggerStyle } from './navigation-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu'
import { OnramperButton } from './onramper'

const EXPLORE_NAVIGATION_LINKS: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'Swap',
    href: '/swap',
    description: 'The easiest way to trade.',
  },
  {
    title: 'Pools',
    href: '/pools',
    description: 'Earn fees by providing liquidity.',
  },
  // {
  //   title: 'Stake',
  //   href: '/stake',
  //   description: 'Earn protocol fees by staking SUSHI.',
  // },
  // {
  //   title: 'Pay',
  //   href: '/furo',
  //   description: 'Automate salaries and vesting schedules.',
  // },
  // {
  //   title: 'Analytics',
  //   href: '/analytics',
  //   description: 'Find the best opportunities',
  // },
  // {
  //   title: 'Blog',
  //   href: '/blog',
  //   description:
  //     'Stay up to date with the latest product developments at Sushi.',
  // },
  // {
  //   title: 'Academy',
  //   href: '/academy',
  //   description: 'Everything you need to get up to speed with DeFi.',
  // },
  // {
  //   title: 'Partner with Sushi',
  //   href: '/partner',
  //   description: 'Incentivize your token with Sushi rewards.',
  // },
  // {
  //   title: 'List enquiry',
  //   href: '/tokenlist-request',
  //   description: 'Get your token on our default token list.',
  // },
]

const TOOLS_NAVIGATION_LINKS: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'Analytics',
    href: '/analytics',
    description: 'Find the best opportunities',
  },
  {
    title: 'Blog',
    href: '/blog',
    description:
      'Stay up to date with the latest product developments at Sushi.',
  },
  {
    title: 'Academy',
    href: '/academy',
    description: 'Everything you need to get up to speed with DeFi.',
  },
  {
    title: 'Forum & Proposals',
    href: 'https://forum.sushi.com',
    description: 'View and discuss proposals for SushiSwap.',
  },
  {
    title: 'Participate',
    href: 'https://snapshot.org/#/sushigov.eth',
    description:
      'As a Sushi holder, you can vote on proposals to shape the future of SushiSwap.',
  },
]

const PARTNER_NAVIGATION_LINKS: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'Partner with U2U',
    href: '/partner',
    description: 'Incentivize your token with U2U rewards.',
  },
  {
    title: 'List enquiry',
    href: '/tokenlist-request',
    description: 'Get your token on our default token list.',
  },
]

const navigationContainerVariants = cva(
  'px-4 sticky flex items-center flex-grow gap-4 top-0 z-50 min-h-[56px] max-h-[56px] h-[56px]',
  {
    variants: {
      variant: {
        default:
          'bg-gray-100 dark:bg-[#212121]',
        transparent: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface NavContainerProps
  extends VariantProps<typeof navigationContainerVariants> {
  children: React.ReactNode
}

const NavigationContainer: React.FC<NavContainerProps> = ({
  children,
  variant,
}) => {
  return (
    <div className={navigationContainerVariants({ variant })}>
      <div>
        <div className='lg:hidden'>
          <U2DexIcon width={24} height={24} />
        </div>
        <div className='hidden lg:block'>
          <svg xmlns="http://www.w3.org/2000/svg" width="124" height="40" viewBox="0 0 124 40" fill="none">
            <path d="M123.513 11.2928L117.543 19.839L123.464 28.6824H119.054L115.289 23.0841L111.4 28.6824H106.941L113.109 19.8142L107.387 11.2928H111.796L115.363 16.5939L119.03 11.2928H123.513Z" fill="white"/>
            <path d="M104.458 14.8104H92.7168V11.3919H104.458V14.8104ZM104.458 22.0932H92.7168V18.6747H104.458V22.0932ZM92.7168 28.7072V25.2887H104.458V28.7072H92.7168Z" fill="white"/>
            <path d="M83.8656 11.3919C87.3831 11.3919 90.2566 14.0425 90.2566 17.2875V22.8116C90.2566 26.0567 87.3831 28.7072 83.8656 28.7072H76.558V25.3878H76.5332V25.2887H83.8656C85.3519 25.2887 86.5409 24.174 86.5409 22.8116V17.2875C86.5409 15.9251 85.3519 14.8104 83.8656 14.8104H76.558V11.3919H83.8656Z" fill="white"/>
            <path d="M48.2682 21.1767C48.2682 22.7373 49.16 24.0997 50.4977 24.8181V28.6329C47.0792 27.7659 44.5525 24.7685 44.5525 21.1767V11.2928H48.2682V21.1767ZM56.9135 11.2928H60.6292V21.1767C60.6292 24.8676 57.9291 27.9888 54.3372 28.7072V24.9915C55.8483 24.3474 56.9135 22.8859 56.9135 21.1767V11.2928Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.04 11.5321C68.2189 11.5165 68.4011 11.5086 68.5863 11.5086C71.4567 11.5086 73.7989 13.5027 73.7989 16.2161C73.7989 18.913 71.9322 20.5149 69.9246 22.1494C68.5863 23.2446 67.3888 24.2253 66.8781 25.5493H73.7989V28.4914H73.7991V25.5493H66.8782C66.912 25.4616 66.9489 25.3755 66.9885 25.2907C67.5481 24.0949 68.675 23.1721 69.9248 22.1494C71.9324 20.5149 73.7991 18.913 73.7991 16.216C73.7991 13.5027 71.4569 11.5086 68.5864 11.5086C68.4012 11.5086 68.219 11.5165 68.04 11.5321ZM68.2718 14.4675C67.0944 14.5964 66.6164 15.4421 66.4378 15.9545L66.438 15.9545C66.6166 15.4422 67.0945 14.5965 68.2718 14.4675ZM69.6559 17.903C69.1907 18.4623 68.5122 19.0342 67.6449 19.7489C65.2114 21.7294 63.148 23.6769 63.148 27.0203L63.148 28.75H74.0776V25.2907H67.294C67.8384 24.2088 68.884 23.3458 70.1088 22.3435C72.1065 20.7171 74.0776 19.0438 74.0776 16.216C74.0776 13.349 71.5987 11.25 68.5864 11.25C65.9922 11.25 63.9549 12.7349 63.1449 14.9732L63.0549 15.2219L66.6176 16.2793L66.703 16.0341C66.7918 15.7794 66.9581 15.4459 67.2516 15.1789C67.5383 14.9179 67.9577 14.7093 68.5864 14.7093C69.0274 14.7093 69.4731 14.8342 69.8027 15.081C70.1246 15.3221 70.3506 15.6895 70.3506 16.216C70.3506 16.8302 70.1139 17.3523 69.6559 17.903Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0644 3.71618L15.623 0.592719V39.4073L0.439209 30.6604V8.15383L6.01561 4.94124L5.9982 11.3558V27.4584L10.0644 29.8009V3.71618Z" fill="#8EF102"/>
            <mask id="mask0_2001_368" maskUnits="userSpaceOnUse" x="18" y="0" width="16" height="40">
            <path d="M23.9273 30.3936V9.60641L27.9935 11.9485V28.0511L23.9273 30.3936ZM18.3687 0V40L33.5524 31.2535V8.74652L18.3687 0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_2001_368)">
            <path d="M33.5524 0H18.3687V40H33.5524V0Z" fill="#8EF102"/>
            </g>
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between flex-grow gap-4">
        {children}
      </div>
    </div>
  )
}

interface NavProps extends VariantProps<typeof navigationContainerVariants> {
  rightElement?: React.ReactNode
  legacyBehavior?: boolean
}

const Navigation: React.FC<NavProps> = ({
  rightElement,
  variant,
  legacyBehavior = false,
}) => {
  return (
    <NavigationContainer variant={variant}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="block md:hidden">
            <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="min-w-[240px] gap-3 p-4">
                {EXPLORE_NAVIGATION_LINKS.map((component) => (
                  <NavigationListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </NavigationListItem>
                ))}
                <OnramperButton>
                  <NavigationListItem title="Buy Crypto">
                    Need to buy some more crypto?
                  </NavigationListItem>
                </OnramperButton>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            {legacyBehavior ? (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/swap">Swap</a>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink
                href="/swap"
                className={navigationMenuTriggerStyle()}
              >
                Swap
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            {legacyBehavior ? (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/pools">Pools</a>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink
                href="/pools"
                className={navigationMenuTriggerStyle()}
              >
                Pools
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[400px] gap-3 p-4">
                {PARTNER_NAVIGATION_LINKS.map((component) => (
                  <NavigationListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    legacyBehavior={legacyBehavior}
                  >
                    {component.description}
                  </NavigationListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="https://faucet.uniultra.xyz/" target='_blank'>Faucet</a>
              </NavigationMenuLink>
          {/* <NavigationMenuItem className="hidden md:block">
            {legacyBehavior ? (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/stake">Stake</a>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink
                href="/stake"
                className={navigationMenuTriggerStyle()}
              >
                Stake
              </NavigationMenuLink>
            )}
          </NavigationMenuItem> */}
          {/* <NavigationMenuItem className="hidden md:block">
            {legacyBehavior ? (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/furo">Pay</a>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink
                href="/furo"
                className={navigationMenuTriggerStyle()}
              >
                Pay
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[400px] gap-3 p-4">
                {TOOLS_NAVIGATION_LINKS.map((component) => (
                  <NavigationListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    legacyBehavior={legacyBehavior}
                  >
                    {component.description}
                  </NavigationListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[400px] gap-3 p-4">
                {PARTNER_NAVIGATION_LINKS.map((component) => (
                  <NavigationListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    legacyBehavior={legacyBehavior}
                  >
                    {component.description}
                  </NavigationListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <OnramperButton>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Buy Crypto
              </NavigationMenuLink>
            </OnramperButton>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-2">
        {rightElement ? rightElement : null}
      </div>
    </NavigationContainer>
  )
}

interface NavigationListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  legacyBehavior?: boolean
}

const NavigationListItem = React.forwardRef<
  React.ElementRef<'a'>,
  NavigationListItemProps
>(
  (
    { className, title, children, legacyBehavior = false, href, ...props },
    ref,
  ) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          {legacyBehavior || !href ? (
            <a
              ref={ref}
              className={classNames(
                'cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className,
              )}
              href={href}
              {...props}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                {children}
              </p>
            </a>
          ) : (
            <Link
              href={href}
              className={classNames(
                'cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className,
              )}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                {children}
              </p>
            </Link>
          )}
        </NavigationMenuLink>
      </li>
    )
  },
)

NavigationListItem.displayName = 'NavListItem'

export {
  EXPLORE_NAVIGATION_LINKS,
  Navigation,
  NavigationContainer,
  NavigationListItem,
  PARTNER_NAVIGATION_LINKS,
  TOOLS_NAVIGATION_LINKS,
}
