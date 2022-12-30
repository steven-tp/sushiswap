import * as React from 'react'

export const HecoCircle = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={128} height={128} rx={64} fill="white" />
    <path
      d="M72.0251 48.6063C72.0251 37.1273 66.4916 27.2376 62.2532 24C62.2532 24 61.9589 23.8234 61.9589 24.2943C61.6057 46.4871 50.3621 52.5504 44.1222 60.6151C29.8176 79.3348 43.1215 99.8204 56.6608 103.588C64.2547 105.707 54.8948 99.8204 53.7175 87.4584C52.3047 72.4474 72.0251 61.0272 72.0251 48.6063Z"
      fill="#282E5B"
    />
    <path
      d="M79.4422 56.2002C79.3833 56.1413 79.2656 56.1413 79.1479 56.2002C79.1479 56.2002 79.1479 56.2002 79.089 56.259C78.8535 59.0258 75.7925 65.0302 71.9661 70.5048C58.9565 89.1067 66.3738 98.0545 70.5533 102.882C72.9668 105.707 70.5533 102.882 76.6166 99.9971C77.0875 99.7616 88.39 93.7572 89.6262 80.159C90.8624 66.9139 82.4444 58.6137 79.4422 56.2002Z"
      fill="#059BDC"
    />
  </svg>
)
