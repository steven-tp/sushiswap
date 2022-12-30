import * as React from 'react'

export const HarmonyCircle = (props: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128" {...props}>
    <rect width="128" height="128" fill="#fff" rx="64" />
    <rect width="128" height="128" fill="url(#paint0_linear_301_2)" rx="64" />
    <path
      fill="#fff"
      d="M84.468 28a15.502 15.502 0 00-10.97 4.54 15.588 15.588 0 00-4.566 10.986v17.215c-1.6.108-3.236.177-4.932.177-1.696 0-3.324.068-4.932.164V43.526a15.599 15.599 0 00-4.637-10.853 15.514 15.514 0 00-10.897-4.475 15.514 15.514 0 00-10.897 4.475A15.599 15.599 0 0028 43.526V84.67a15.599 15.599 0 004.637 10.854 15.514 15.514 0 0010.897 4.475c4.077 0 7.991-1.608 10.897-4.475a15.599 15.599 0 004.637-10.854V67.455c1.6-.108 3.236-.176 4.932-.176 1.696 0 3.324-.068 4.932-.164V84.67a15.599 15.599 0 004.637 10.854 15.514 15.514 0 0010.897 4.475c4.077 0 7.991-1.608 10.897-4.475A15.599 15.599 0 00100 84.67V43.526a15.588 15.588 0 00-4.564-10.984A15.502 15.502 0 0084.468 28zm-40.936 6.361a9.151 9.151 0 016.474 2.682 9.202 9.202 0 012.694 6.483v18.23a52.146 52.146 0 00-13.2 3.742 23.982 23.982 0 00-5.12 3.064V43.526a9.201 9.201 0 012.688-6.478 9.151 9.151 0 016.464-2.687zm9.168 50.31a9.206 9.206 0 01-2.685 6.5 9.156 9.156 0 01-6.483 2.692 9.156 9.156 0 01-6.483-2.692 9.206 9.206 0 01-2.685-6.5v-4.128c0-3.646 2.88-7.1 7.708-9.25A45.104 45.104 0 0152.7 68.178V84.67zm31.768 9.164a9.151 9.151 0 01-6.474-2.681A9.201 9.201 0 0175.3 84.67V66.44A52.146 52.146 0 0088.5 62.7a23.987 23.987 0 005.12-3.065V84.67a9.201 9.201 0 01-2.688 6.478 9.152 9.152 0 01-6.464 2.687zm1.46-36.956A45.104 45.104 0 0175.3 59.995V43.526c0-2.438.966-4.776 2.685-6.5a9.156 9.156 0 016.483-2.693c2.431 0 4.763.969 6.483 2.693a9.206 9.206 0 012.685 6.5v4.127c0 3.63-2.88 7.084-7.708 9.226z"
    />
    <defs>
      <linearGradient
        id="paint0_linear_301_2"
        x1="8.107"
        x2="119.469"
        y1="118.464"
        y2="7.104"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00AEE9" />
        <stop offset="1" stopColor="#69FABD" />
      </linearGradient>
    </defs>
  </svg>
)
