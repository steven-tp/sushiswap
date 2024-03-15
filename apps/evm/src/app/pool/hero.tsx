'use client'

import { GiftIcon } from '@heroicons/react-v1/outline'
import { TridentChainId, isTridentChainId } from '@sushiswap/trident-sdk'
import { LinkExternal, LinkInternal, typographyVariants } from '@sushiswap/ui'
import { Button } from '@sushiswap/ui/components/button'
import { Chip } from '@sushiswap/ui/components/chip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@sushiswap/ui/components/dropdown-menu'
import { DiscordIcon } from '@sushiswap/ui/components/icons'
import { SelectIcon } from '@sushiswap/ui/components/select'
import { isSushiSwapV2ChainId } from '@sushiswap/v2-sdk'
import { SushiSwapV3ChainId, isSushiSwapV3ChainId } from '@sushiswap/v3-sdk'
import { useNetwork } from '@sushiswap/wagmi'
import { FC } from 'react'
import { ChainId } from 'sushi/chain'

export const Hero: FC = () => {
  const { chain } = useNetwork()
  const chainId = chain?.id || ChainId.U2U_NEBULAS
  return (
    <section>
      <div className="background-card border-neubrutal py-5 px-10 rounded-lg flex flex-col justify-between gap-12 lg:flex-row lg:items-center mb-8">
        <div className="flex flex-col items-center flex-grow gap-6 lg:items-start">
          <div className="flex flex-col">
            <h1 className={typographyVariants({ variant: 'h1' }) + ' normal-case'}>
              Put your funds to work <br />
              by providing liquidity.
            </h1>
            <p
              className={typographyVariants({
                variant: 'lead',
                className: 'max-w-[500px] !color-base',
              })}
            >
              When you add liquidity to a pool, you can receive a share of its
              trading volume!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 lg:items-end">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="452" height="279" viewBox="0 0 452 279" fill="none">
              <g filter="url(#filter0_d_2006_253)">
              <path d="M92.1238 126.675C90.3821 130.872 88.6405 135.069 87.1268 139.295C82.3334 152.691 81.1756 166.582 82.19 180.364C84.3432 209.507 106.904 222.3 128.027 212.311C149.149 202.322 171.053 189.69 191.34 203.534C211.628 217.379 229.53 269.355 265.717 264.186C301.894 259.018 307.339 212.425 330.682 216.215C354.024 220.005 360.714 243.866 392.396 232.329C424.079 220.792 396.361 177.785 412.98 164.075C429.599 150.364 443.188 142.994 448.547 120.237C453.907 97.4797 412.531 80.9059 396.799 56.4867C381.067 32.0602 375.88 7.14543 338.99 2.24643C302.09 -2.65264 277.82 42.8122 240.161 40.5564C221.337 39.4286 206.677 30.7066 191.653 23.8911C166.264 12.382 120.455 2.80195 105.369 27.9358C98.8039 38.869 100.539 51.4621 100.856 63.0049C101.192 75.0082 103.145 87.4633 101.148 99.4217C99.5939 108.728 95.8588 117.698 92.1238 126.668L92.1238 126.675Z" fill="#E9FDFD" fill-opacity="0.2" shape-rendering="crispEdges"/>
              <path d="M93.123 126.876L93.0474 127.059C91.3041 131.259 89.5723 135.433 88.0683 139.632L93.123 126.876ZM93.123 126.876L93.1231 126.87M93.123 126.876L93.1231 126.87M93.1231 126.87C96.8248 117.98 100.569 108.962 102.134 99.5864C103.15 93.5043 103.158 87.319 102.876 81.1843C102.755 78.5463 102.583 75.9468 102.412 73.3672C102.181 69.8831 101.952 66.4352 101.855 62.9775C101.855 62.9773 101.855 62.9771 101.855 62.9769L100.856 63.0049M93.1231 126.87L199.196 28.5435C211.559 34.4599 224.422 40.6152 240.101 41.5546C258.93 42.6825 274.444 32.1178 289.46 21.8927C289.781 21.6739 290.102 21.4553 290.423 21.2369C305.87 10.7243 320.847 0.846347 338.859 3.23772C357.037 5.65188 367.327 12.9667 375.046 22.6665C378.929 27.5456 382.172 33.0418 385.445 38.8843C386.073 40.0066 386.703 41.142 387.339 42.2878C390.002 47.0884 392.766 52.0708 395.958 57.0282L396.799 56.4867C393.626 51.5597 390.882 46.6129 388.22 41.8144C377.685 22.8236 368.439 6.15727 338.99 2.24643C320.201 -0.248093 304.687 10.3151 289.012 20.9874C273.903 31.2748 258.645 41.6636 240.161 40.5564C224.695 39.6298 212.04 33.5766 199.684 27.6663C197.001 26.3832 194.333 25.1068 191.653 23.8911M100.856 63.0049C100.81 61.3551 100.736 59.6838 100.661 57.999C100.213 47.8961 99.7423 37.3063 105.369 27.9358C120.455 2.80195 166.264 12.382 191.653 23.8911M100.856 63.0049C100.953 66.4644 101.184 69.9615 101.416 73.4734C101.99 82.1465 102.57 90.9099 101.148 99.4217M100.856 63.0049L101.148 99.4217M191.653 23.8911L191.239 24.8018C191.24 24.8018 191.24 24.8018 191.24 24.8019L191.653 23.8911ZM101.148 99.4217C99.5939 108.728 95.8588 117.698 92.1238 126.668L92.1238 126.675L101.148 99.4217Z" stroke="black" stroke-width="2" shape-rendering="crispEdges"/>
              </g>
              <g clip-path="url(#clip0_2006_253)">
              <path d="M254.954 129.77L265.137 117.455L264.111 134.269L259.927 160.635L253.375 156.373L249.191 147.215L249.823 139.4L254.954 129.77Z" fill="white"/>
              <path d="M279.774 102.813L285.539 96.307L284.958 105.19L282.589 119.119L278.881 116.867L276.513 112.03L276.87 107.901L279.774 102.813Z" fill="white"/>
              <path d="M251.791 84.4502L255.359 80.4228L254.999 85.9217L253.533 94.5445L251.237 93.1504L249.771 90.1557L249.993 87.5998L251.791 84.4502Z" fill="white"/>
              <path d="M263.456 119.699L253.872 141.338C253.872 141.338 250.328 152.877 258.604 159.674L265.484 161.434L274.782 158.495L280.224 151.82L281.879 145.023L280.12 137.238L269.34 120.393L265.545 117.411L263.456 119.699Z" fill="#8ef102"/>
              <path d="M284.773 100.306L280.51 109.929C280.51 109.929 278.933 115.061 282.616 118.087L285.675 118.867L289.817 117.558L292.234 114.584L292.971 111.559L292.191 108.091L287.399 100.601L285.709 99.2741L284.782 100.288L284.773 100.306Z" fill="#8ef102"/>
              <path d="M254.834 81.415L251.498 88.9401C251.498 88.9401 250.268 92.9541 253.144 95.3208L255.536 95.9277L258.768 94.9047L260.657 92.5813L261.238 90.2145L260.623 87.5096L256.871 81.6491L255.553 80.6174L254.826 81.415H254.834Z" fill="#8ef102"/>
              <path d="M259.748 277.415C292.559 277.415 319.158 273.661 319.158 269.031C319.158 264.401 292.559 260.648 259.748 260.648C226.936 260.648 200.337 264.401 200.337 269.031C200.337 273.661 226.936 277.415 259.748 277.415Z" fill="black" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M1.08319 260.041H390.917" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M59.9737 140.922L58.8212 145.673L54.5405 163.402L53.1367 169.219L31.8543 257.345C31.4903 258.879 30.0432 259.729 28.648 259.243C27.2529 258.758 26.421 257.111 26.7936 255.576L48.4746 165.76L49.8785 159.952L53.3273 145.673L54.4798 140.922H59.9651H59.9737Z" fill="white" stroke="black" stroke-width="2.91" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M175.892 259.252C174.497 259.729 173.058 258.888 172.694 257.353L151.412 169.228L150.017 163.411L145.727 145.682L144.575 140.931H150.06L151.213 145.682L154.661 159.96L156.074 165.769L177.755 255.585C178.119 257.119 177.287 258.758 175.892 259.252Z" fill="white" stroke="black" stroke-width="2.91" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M180.796 143.289C180.796 143.939 180.536 144.546 180.095 144.971C179.67 145.396 179.072 145.673 178.422 145.673H26.1264C24.8093 145.673 23.7521 144.607 23.7521 143.289C23.7521 142.639 24.012 142.041 24.4453 141.616C24.8786 141.182 25.4678 140.914 26.1264 140.914H178.431C179.739 140.914 180.805 141.98 180.805 143.289H180.796Z" fill="white" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M169.947 23.0347H34.4539C31.0321 23.0347 28.2581 25.81 28.2581 29.2334V134.845C28.2581 138.268 31.0321 141.044 34.4539 141.044H169.947C173.369 141.044 176.143 138.268 176.143 134.845V29.2334C176.143 25.81 173.369 23.0347 169.947 23.0347Z" fill="white" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M41.5943 40.0963V126.479H161.802" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M145.034 30.0743H164.341" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M154.28 35.8049H164.341" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.0813 45.35H38.3967" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.0813 53.4646H38.3967" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.0813 61.5706H38.3967" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.0813 69.6852H38.3967" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.0813 77.7998H38.3967" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.0813 85.9145H38.3967" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.0813 94.0291H38.3967" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.0813 102.144H38.3967" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.0813 110.25H38.3967" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.0813 118.364H38.3967" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M51.9062 131.308H56.2216" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M68.9425 131.308H73.2579" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M84.9996 131.308H89.315" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M101.048 131.308H105.363" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M117.426 131.308H121.741" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M133.145 131.308H137.46" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M149.202 131.308H153.518" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M57.4521 87.7697H50.6671V119.951H57.4521V87.7697Z" fill="#8ef102" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M74.4971 70.8643H67.712V120.211H74.4971V70.8643Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M90.5456 78.1293H83.7605V120.211H90.5456V78.1293Z" fill="#8ef102" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M106.594 90.674H99.809V120.211H106.594V90.674Z" fill="#8ef102" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M122.98 83.409H116.195V120.211H122.98V83.409Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M138.7 76.8115H131.914V120.211H138.7V76.8115Z" fill="#8ef102" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M154.748 62.2815H147.963V120.211H154.748V62.2815Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M50.7363 79.6118C50.7363 79.6118 50.7363 60.6343 69.939 60.721C90.3895 60.8077 89.055 75.1643 112.868 75.0863C135.762 75.0083 146.429 51.514 146.429 51.514" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M40.7537 22.9133L102.877 14.582L167.33 22.5926" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.1195 260.162C18.1195 262.139 26.2824 263.734 36.3517 263.734C46.4209 263.734 54.5838 262.13 54.5838 260.162V253.01C54.5838 253.01 42.6428 256.582 36.3517 256.582C30.0605 256.582 18.1195 253.01 18.1195 253.01V260.162Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.1195 253.01C18.1195 254.987 26.2824 256.582 36.3517 256.582C46.4209 256.582 54.5838 254.978 54.5838 253.01C54.5838 251.042 46.4209 249.438 36.3517 249.438C26.2824 249.438 18.1195 251.042 18.1195 253.01Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M10.1386 251.9C10.1386 253.877 18.3015 255.472 28.3708 255.472C38.44 255.472 46.6029 253.868 46.6029 251.9V244.748C46.6029 244.748 34.6619 248.32 28.3708 248.32C22.0796 248.32 10.1386 244.748 10.1386 244.748V251.9Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M28.3708 248.329C38.4401 248.329 46.6029 246.729 46.6029 244.757C46.6029 242.784 38.4401 241.185 28.3708 241.185C18.3014 241.185 10.1386 242.784 10.1386 244.757C10.1386 246.729 18.3014 248.329 28.3708 248.329Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M381.367 263.587C381.367 265.563 373.205 267.159 363.135 267.159C353.066 267.159 344.903 265.555 344.903 263.587V256.434C344.903 256.434 356.844 260.006 363.135 260.006C369.426 260.006 381.367 256.434 381.367 256.434V263.587Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M363.135 260.015C373.205 260.015 381.367 258.416 381.367 256.443C381.367 254.47 373.205 252.871 363.135 252.871C353.066 252.871 344.903 254.47 344.903 256.443C344.903 258.416 353.066 260.015 363.135 260.015Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M389.045 256.322C389.045 258.298 380.882 259.894 370.813 259.894C360.744 259.894 352.581 258.29 352.581 256.322V249.169C352.581 249.169 364.522 252.741 370.813 252.741C377.104 252.741 389.045 249.169 389.045 249.169V256.322Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M389.045 249.169C389.045 251.146 380.882 252.741 370.813 252.741C360.744 252.741 352.581 251.137 352.581 249.169C352.581 247.201 360.744 245.598 370.813 245.598C380.882 245.598 389.045 247.201 389.045 249.169Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M378.811 247.505C378.811 249.482 370.648 251.077 360.579 251.077C350.51 251.077 342.347 249.473 342.347 247.505V240.353C342.347 240.353 354.288 243.924 360.579 243.924C366.87 243.924 378.811 240.353 378.811 240.353V247.505Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M378.811 240.353C378.811 242.329 370.648 243.924 360.579 243.924C350.51 243.924 342.347 242.321 342.347 240.353C342.347 238.385 350.51 236.781 360.579 236.781C370.648 236.781 378.811 238.385 378.811 240.353Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M385.847 240.353C385.847 242.329 377.685 243.924 367.615 243.924C357.546 243.924 349.383 242.321 349.383 240.353V233.2C349.383 233.2 361.324 236.772 367.615 236.772C373.906 236.772 385.847 233.2 385.847 233.2V240.353Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M367.615 236.781C377.685 236.781 385.847 235.182 385.847 233.209C385.847 231.236 377.685 229.637 367.615 229.637C357.546 229.637 349.383 231.236 349.383 233.209C349.383 235.182 357.546 236.781 367.615 236.781Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M385.847 233.209C385.847 235.186 377.685 236.781 367.615 236.781C357.546 236.781 349.383 235.177 349.383 233.209V226.057C349.383 226.057 361.324 229.628 367.615 229.628C373.906 229.628 385.847 226.057 385.847 226.057V233.209Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M367.615 229.628C377.685 229.628 385.847 228.029 385.847 226.057C385.847 224.084 377.685 222.485 367.615 222.485C357.546 222.485 349.383 224.084 349.383 226.057C349.383 228.029 357.546 229.628 367.615 229.628Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M385.847 226.126C385.847 228.103 377.685 229.698 367.615 229.698C357.546 229.698 349.383 228.094 349.383 226.126V218.974C349.383 218.974 361.324 222.545 367.615 222.545C373.906 222.545 385.847 218.974 385.847 218.974V226.126Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M367.615 222.545C377.685 222.545 385.847 220.946 385.847 218.974C385.847 217.001 377.685 215.402 367.615 215.402C357.546 215.402 349.383 217.001 349.383 218.974C349.383 220.946 357.546 222.545 367.615 222.545Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M379.66 218.974C379.66 220.95 371.497 222.546 361.428 222.546C351.359 222.546 343.196 220.942 343.196 218.974V211.821C343.196 211.821 355.137 215.393 361.428 215.393C367.719 215.393 379.66 211.821 379.66 211.821V218.974Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M361.428 215.402C371.498 215.402 379.66 213.803 379.66 211.83C379.66 209.857 371.498 208.258 361.428 208.258C351.359 208.258 343.196 209.857 343.196 211.83C343.196 213.803 351.359 215.402 361.428 215.402Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M385.847 211.83C385.847 213.807 377.685 215.402 367.615 215.402C357.546 215.402 349.383 213.798 349.383 211.83V204.678C349.383 204.678 361.324 208.249 367.615 208.249C373.906 208.249 385.847 204.678 385.847 204.678V211.83Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M385.847 204.678C385.847 206.654 377.685 208.249 367.615 208.249C357.546 208.249 349.383 206.646 349.383 204.678C349.383 202.71 357.546 201.106 367.615 201.106C377.685 201.106 385.847 202.71 385.847 204.678Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M378.811 204.678C378.811 206.654 370.648 208.25 360.579 208.25C350.51 208.25 342.347 206.646 342.347 204.678V197.525C342.347 197.525 354.288 201.097 360.579 201.097C366.87 201.097 378.811 197.525 378.811 197.525V204.678Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M360.57 201.106C370.64 201.106 378.802 199.507 378.802 197.534C378.802 195.561 370.64 193.962 360.57 193.962C350.501 193.962 342.338 195.561 342.338 197.534C342.338 199.507 350.501 201.106 360.57 201.106Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M386.913 197.534C386.913 199.511 378.75 201.106 368.681 201.106C358.612 201.106 350.449 199.502 350.449 197.534V190.382C350.449 190.382 362.39 193.954 368.681 193.954C374.972 193.954 386.913 190.382 386.913 190.382V197.534Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M368.681 193.954C378.751 193.954 386.913 192.354 386.913 190.382C386.913 188.409 378.751 186.81 368.681 186.81C358.612 186.81 350.449 188.409 350.449 190.382C350.449 192.354 358.612 193.954 368.681 193.954Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M323.014 267.913C324.453 269.057 330.354 262.546 336.186 253.383C342.026 244.211 345.588 235.853 344.149 234.709C343.612 234.284 338.933 230.565 338.933 230.565C338.933 230.565 334.617 243.508 330.969 249.239C327.459 254.753 317.797 263.769 317.797 263.769C317.797 263.769 322.442 267.453 323.014 267.913Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M317.806 263.769C319.245 264.913 325.146 258.402 330.978 249.239C336.818 240.066 340.38 231.709 338.941 230.565C337.503 229.42 331.602 235.931 325.77 245.095C319.929 254.267 316.368 262.624 317.806 263.769Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M17.8162 242.112C17.8162 244.089 25.9791 245.684 36.0484 245.684C46.1177 245.684 54.2805 244.08 54.2805 242.112V234.96C54.2805 234.96 42.3395 238.532 36.0484 238.532C29.7572 238.532 17.8162 234.96 17.8162 234.96V242.112Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M36.0484 238.541C46.1177 238.541 54.2805 236.941 54.2805 234.969C54.2805 232.996 46.1177 231.397 36.0484 231.397C25.979 231.397 17.8162 232.996 17.8162 234.969C17.8162 236.941 25.979 238.541 36.0484 238.541Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M10.1386 234.847C10.1386 236.824 18.3015 238.419 28.3708 238.419C38.44 238.419 46.6029 236.815 46.6029 234.847V227.695C46.6029 227.695 34.6619 231.267 28.3708 231.267C22.0796 231.267 10.1386 227.695 10.1386 227.695V234.847Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M28.3708 231.267C38.4401 231.267 46.6029 229.668 46.6029 227.695C46.6029 225.722 38.4401 224.123 28.3708 224.123C18.3014 224.123 10.1386 225.722 10.1386 227.695C10.1386 229.668 18.3014 231.267 28.3708 231.267Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M261.775 169.722C276.073 169.722 289.175 173.606 299.383 180.065C302.659 177.594 308.751 172.757 310.986 174.742C314.435 177.811 311.636 187.365 311.22 190.208C316.437 196.329 319.765 203.473 320.562 211.171L321.35 211.292C326.307 212.055 329.713 216.737 328.959 221.748L328.326 225.953C327.572 230.963 322.936 234.405 317.98 233.642C316.558 233.426 315.129 234.033 314.323 235.238C309.808 241.982 303.136 247.739 294.999 251.978L289.522 268.346C289.037 269.785 287.702 270.765 286.195 270.765H282.858C281.385 270.765 280.059 269.829 279.557 268.433L275.969 258.498C271.42 259.356 266.671 259.816 261.775 259.816C253.786 259.816 246.767 259.425 240.64 258.316L237.356 267.401C236.507 269.742 234.306 271.294 231.845 271.294H230.372C228.734 271.294 227.278 270.236 226.758 268.676L220.415 249.698L221.437 249.915C215.372 244.653 211.16 236.755 208.327 225.12C199.739 189.862 229.202 169.722 261.775 169.722Z" fill="#8ef102"/>
              <path d="M262.893 175.011C277.191 175.011 290.293 178.895 300.501 185.353C303.777 182.883 309.869 178.045 312.104 180.03C312.312 180.221 312.503 180.429 312.668 180.663C312.728 178.218 312.356 175.956 310.978 174.733C308.733 172.739 302.65 177.577 299.375 180.056C289.167 173.598 276.065 169.714 261.767 169.714C229.193 169.714 199.73 189.853 208.318 225.112C208.413 225.51 208.517 225.883 208.613 226.273C203.223 193.581 231.611 175.011 262.884 175.011H262.893Z" fill="white"/>
              <path d="M261.775 169.722C276.073 169.722 289.175 173.606 299.383 180.065C302.659 177.594 308.751 172.757 310.986 174.742C314.435 177.811 311.636 187.365 311.22 190.208C316.437 196.329 319.765 203.473 320.562 211.171L321.35 211.292C326.307 212.055 329.713 216.737 328.959 221.748L328.326 225.953C327.572 230.963 322.936 234.405 317.98 233.642C316.558 233.426 315.129 234.032 314.323 235.238C309.808 241.982 303.136 247.739 294.999 251.978L289.522 268.346C289.037 269.785 287.702 270.765 286.195 270.765H282.858C281.385 270.765 280.059 269.829 279.557 268.433L275.969 258.498C271.42 259.356 266.671 259.816 261.775 259.816C253.786 259.816 246.767 259.425 240.64 258.316L237.356 267.401C236.507 269.742 234.306 271.294 231.845 271.294H230.372C228.734 271.294 227.278 270.236 226.758 268.676L220.415 249.698L221.437 249.915C215.372 244.653 211.16 236.755 208.327 225.12C199.739 189.862 229.202 169.722 261.775 169.722Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M221.715 253.391L221.654 253.374L221.637 253.313C221.637 253.313 221.697 253.365 221.723 253.391H221.715Z" fill="white"/>
              <path d="M220.866 249.612C223.751 251.736 227.061 253.235 230.502 254.172" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M275.155 258.29C280.458 257.926 281.957 257.171 285.449 255.541" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M241.862 182.137C243.82 180.741 246.689 179.658 250.042 178.912C258.179 177.1 269.219 177.265 277.234 179.64C280.432 180.585 283.144 181.877 285.016 183.541" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M302.356 184.894C304.808 181.209 307.72 177.724 310.987 174.742" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M319.253 222.285C318.153 227.877 319.496 232.862 322.252 233.408C325.007 233.954 328.135 229.88 329.227 224.279C330.328 218.687 328.985 213.703 326.229 213.156C323.473 212.602 320.345 216.685 319.253 222.285Z" fill="white" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M325.259 219.971L323.794 228.007" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M374.149 104.467H330.406C326.359 104.467 323.04 107.779 323.04 111.836V137.281C323.04 141.33 326.35 144.65 330.406 144.65H346.281L357.615 157.212L358.118 144.65H374.158C378.205 144.65 381.523 141.338 381.523 137.281V111.836C381.523 107.788 378.213 104.467 374.158 104.467H374.149Z" fill="#FD874A"/>
              <path d="M330.926 107.978H380.414C379.114 105.88 376.792 104.467 374.149 104.467H330.406C326.359 104.467 323.04 107.779 323.04 111.836V137.281C323.04 139.934 324.47 142.257 326.593 143.549V112.313C326.593 109.92 328.534 107.978 330.926 107.978Z" fill="white"/>
              <path d="M350.527 149.106H350.302L357.607 157.212L357.615 156.961L350.527 149.106Z" fill="white"/>
              <path d="M374.149 104.467H330.406C326.359 104.467 323.04 107.779 323.04 111.836V137.281C323.04 141.33 326.35 144.65 330.406 144.65H346.281L357.615 157.212L358.118 144.65H374.158C378.205 144.65 381.523 141.338 381.523 137.281V111.836C381.523 107.788 378.213 104.467 374.158 104.467H374.149Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M340.804 119.101C340.804 118.2 341.03 117.376 341.489 116.63C341.948 115.885 342.581 115.295 343.395 114.853C344.21 114.411 345.154 114.194 346.238 114.194C347.321 114.194 348.248 114.411 349.054 114.853C349.86 115.295 350.492 115.885 350.952 116.63C351.411 117.376 351.636 118.191 351.636 119.101C351.636 120.012 351.411 120.792 350.96 121.537C350.51 122.283 349.877 122.872 349.071 123.332C348.265 123.783 347.321 124.008 346.238 124.008C345.154 124.008 344.193 123.783 343.378 123.332C342.563 122.881 341.931 122.283 341.48 121.537C341.03 120.792 340.804 119.986 340.804 119.101ZM344.011 119.101C344.011 119.777 344.219 120.324 344.626 120.74C345.033 121.156 345.57 121.364 346.22 121.364C346.87 121.364 347.381 121.156 347.789 120.74C348.187 120.324 348.387 119.777 348.387 119.101C348.387 118.425 348.187 117.888 347.789 117.463C347.39 117.029 346.87 116.813 346.22 116.813C345.57 116.813 345.05 117.029 344.635 117.463C344.219 117.896 344.011 118.442 344.011 119.101ZM357.251 114.567H360.336L347.485 135.114H344.401L357.251 114.567ZM353.049 130.588C353.049 129.687 353.274 128.863 353.733 128.126C354.193 127.389 354.825 126.8 355.648 126.349C356.472 125.907 357.416 125.681 358.482 125.681C359.548 125.681 360.492 125.907 361.307 126.349C362.121 126.791 362.754 127.389 363.213 128.126C363.673 128.863 363.898 129.687 363.898 130.588C363.898 131.49 363.673 132.288 363.222 133.033C362.771 133.779 362.139 134.377 361.324 134.828C360.51 135.27 359.565 135.495 358.482 135.495C357.399 135.495 356.437 135.27 355.622 134.828C354.808 134.386 354.175 133.787 353.725 133.033C353.274 132.288 353.049 131.473 353.049 130.588ZM356.272 130.588C356.272 131.265 356.472 131.811 356.879 132.227C357.286 132.643 357.815 132.851 358.482 132.851C359.149 132.851 359.634 132.643 360.033 132.227C360.432 131.811 360.631 131.265 360.631 130.588C360.631 129.912 360.432 129.375 360.033 128.95C359.634 128.516 359.115 128.3 358.482 128.3C357.849 128.3 357.295 128.516 356.887 128.95C356.48 129.383 356.272 129.929 356.272 130.588Z" fill="white"/>
              <path d="M265.484 151.794C262.91 151.794 260.822 149.704 260.822 147.13H263.422C263.422 148.265 264.349 149.193 265.484 149.193C266.619 149.193 267.546 148.265 267.546 147.13C267.546 146.081 266.767 145.214 265.753 145.084H265.484C262.91 145.084 260.822 142.994 260.822 140.419C260.822 137.845 262.91 135.755 265.484 135.755C268.058 135.755 270.146 137.845 270.146 140.419H267.546C267.546 139.284 266.619 138.356 265.484 138.356C264.349 138.356 263.422 139.284 263.422 140.419C263.422 141.468 264.202 142.335 265.215 142.465H265.484C268.058 142.465 270.146 144.555 270.146 147.13C270.146 149.704 268.058 151.794 265.484 151.794Z" fill="black"/>
              <path d="M266.784 132.4H264.184V137.056H266.784V132.4Z" fill="black"/>
              <path d="M266.784 150.493H264.184V155.149H266.784V150.493Z" fill="black"/>
              <path d="M265.484 162.735C255.727 162.735 247.781 154.793 247.781 145.023C247.781 132.288 263.89 116.5 264.574 115.833L265.484 114.949L266.385 115.842C267.07 116.518 283.17 132.574 283.17 145.023C283.17 154.785 275.233 162.735 265.467 162.735H265.484ZM265.484 118.624C262.087 122.153 250.389 135.027 250.389 145.023C250.389 153.354 257.165 160.134 265.493 160.134C273.82 160.134 280.597 153.354 280.597 145.023C280.597 135.244 268.881 122.196 265.493 118.624H265.484Z" fill="black"/>
              <path d="M285.207 120.748C280.025 120.748 275.813 116.561 275.813 111.403C275.813 104.883 283.959 96.9507 284.306 96.6126L285.215 95.737L286.117 96.6213C286.463 96.9594 294.6 105.022 294.6 111.403C294.6 116.552 290.389 120.748 285.207 120.748ZM285.207 99.4128C282.711 102.066 278.422 107.449 278.422 111.403C278.422 115.122 281.472 118.148 285.215 118.148C288.959 118.148 292.009 115.122 292.009 111.403C292.009 107.684 287.702 102.1 285.207 99.4128Z" fill="black"/>
              <path d="M255.666 97.1241C251.663 97.1241 248.413 93.8904 248.413 89.9111C248.413 84.9001 254.652 78.8315 254.912 78.5714L255.675 77.8432L256.429 78.5801C256.697 78.8402 262.928 85.0128 262.928 89.9111C262.928 93.8904 259.678 97.1241 255.675 97.1241H255.666ZM255.666 80.9035C253.768 82.9408 250.58 86.9635 250.58 89.9111C250.58 92.694 252.859 94.9567 255.666 94.9567C258.474 94.9567 260.753 92.694 260.753 89.9111C260.753 87.1282 257.564 82.9668 255.657 80.9035H255.666Z" fill="black"/>
              </g>
              <defs>
              <filter id="filter0_d_2006_253" x="81.8514" y="1.87683" width="369.171" height="264.67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="2" dy="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2006_253"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2006_253" result="shape"/>
              </filter>
              <clipPath id="clip0_2006_253">
              <rect width="392" height="265" fill="white" transform="translate(0 13.4983)"/>
              </clipPath>
              </defs>
            </svg>
          </div>
          {/* <div className="flex flex-col items-center gap-1 lg:items-end">
            <span className="font-semibold lg:text-sm">
              Looking for a partnership with Sushi?
            </span>
            <Button
              className="flex-1 w-full sm:flex-0 sm:w-[unset]"
              variant="link"
              size="sm"
              asChild
            >
              <LinkInternal href="/partner">Apply here</LinkInternal>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-1 lg:items-end">
            <span className="font-semibold lg:text-sm">Need Help?</span>
            <Button icon={DiscordIcon} variant="link" size="sm" asChild>
              <LinkExternal href="https://discord.gg/NVPXN4e">
                Join our discord
              </LinkExternal>
            </Button>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-[unset] gap-4">
        <div className="flex w-1/2  border-neubrutal rounded-lg h-20">
        <LinkInternal
          className='w-full'
            href={
              isSushiSwapV3ChainId(chainId as SushiSwapV3ChainId)
                ? `/pool/add?chainId=${chainId}`
                : isSushiSwapV2ChainId(chainId as SushiSwapV3ChainId)
                ? `/pool/add/v2/${chainId}`
                : isTridentChainId(chainId as TridentChainId)
                ? `/pool/add/trident/${chainId}`
                : ''
            }
          >
          <Button
            asChild
            size="lg"
            className="px-6 font-display !bg-hover text-lg !font-bold !text-black flex-1 w-full sm:flex-0 rounded-md !justify-between h-full"
          >
   
              I want to create a position
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="134" height="94" viewBox="0 0 134 94" fill="none">
                <g clip-path="url(#clip0_70_5775)">
                <path d="M129.005 88.6441H114.093C112.831 88.6441 111.808 89.6737 111.808 90.9438V90.9466C111.808 92.2167 112.831 93.2463 114.093 93.2463H129.005C130.267 93.2463 131.29 92.2167 131.29 90.9466V90.9438C131.29 89.6737 130.267 88.6441 129.005 88.6441Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M128.312 88.9355V91.6151" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M116.761 90.2753V92.9549" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M127.827 83.9534H112.918C111.655 83.9534 110.633 84.9846 110.633 86.253C110.633 87.5242 111.658 88.5527 112.918 88.5527H127.827C129.09 88.5527 130.112 87.5214 130.112 86.253C130.112 84.9818 129.087 83.9534 127.827 83.9534Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M131.36 79.2627H116.449C115.187 79.2627 114.164 80.2923 114.164 81.5623V81.5652C114.164 82.8353 115.187 83.8649 116.449 83.8649H131.36C132.622 83.8649 133.645 82.8353 133.645 81.5652V81.5623C133.645 80.2923 132.622 79.2627 131.36 79.2627Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M130.115 79.5541V82.2337" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M126.022 80.8939V83.5734" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M118.563 80.8939V83.5734" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M129.005 74.5748H114.096C112.833 74.5748 111.811 75.6061 111.811 76.8745C111.811 78.1457 112.836 79.1741 114.096 79.1741H129.005C130.268 79.1741 131.289 78.1429 131.289 76.8745C131.289 75.6032 130.265 74.5748 129.005 74.5748Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M115.776 74.8662V77.5458" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M119.866 76.206V78.8856" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M124.838 76.206V78.8856" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M109.299 88.6441H94.3873C93.1255 88.6441 92.1025 89.6737 92.1025 90.9438V90.9466C92.1025 92.2167 93.1255 93.2463 94.3873 93.2463H109.299C110.561 93.2463 111.584 92.2167 111.584 90.9466V90.9438C111.584 89.6737 110.561 88.6441 109.299 88.6441Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M100.379 90.2753V92.9549" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M107.837 90.2753V92.9549" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M86.9994 88.6441H72.0875C70.8257 88.6441 69.8027 89.6737 69.8027 90.9438V90.9466C69.8027 92.2167 70.8257 93.2463 72.0875 93.2463H86.9994C88.2612 93.2463 89.2841 92.2167 89.2841 90.9466V90.9438C89.2841 89.6737 88.2612 88.6441 86.9994 88.6441Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M73.4753 88.6441V91.3237" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M77.568 89.9839V92.6635" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M85.0269 89.9839V92.6635" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M106.157 83.9534H91.2481C89.9851 83.9534 88.9634 84.9847 88.9634 86.2531C88.9634 87.5243 89.988 88.5527 91.2481 88.5527H106.157C107.42 88.5527 108.442 87.5215 108.442 86.2531C108.442 84.9818 107.417 83.9534 106.157 83.9534Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M103.966 84.2448V86.9244" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M97.3872 85.5846V88.2642" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M92.4147 85.5846V88.2642" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M109.299 79.2627H94.3873C93.1255 79.2627 92.1025 80.2923 92.1025 81.5623V81.5652C92.1025 82.8353 93.1255 83.8649 94.3873 83.8649H109.299C110.561 83.8649 111.584 82.8353 111.584 81.5652V81.5623C111.584 80.2923 110.561 79.2627 109.299 79.2627Z" fill="white" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M96.0675 79.5541V82.2337" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M100.157 80.8939V83.5734" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M107.619 80.8939V83.5734" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M95.1109 28.6705C95.1109 29.1133 94.6398 29.399 94.2509 29.1847L86.4657 24.9282C86.1791 24.774 85.8271 24.8797 85.6767 25.1625L60.2635 76.0261C60.1187 76.2946 59.7923 76.4061 59.517 76.2832L46.1236 70.3441C45.8369 70.2184 45.5048 70.3413 45.3658 70.6212L35.4235 90.9238C35.3043 91.1695 35.029 92.615 34.7679 92.555C34.7679 92.555 33.6837 92.555 32.0319 92.5464C26.5825 92.5321 14.926 92.4636 15.0708 92.2036L36.3176 52.8754C36.4708 52.6097 36.8001 52.5011 37.0754 52.6354L51.6836 61.0198C51.9532 61.1455 52.2768 61.0484 52.4329 60.797L75.1442 19.8147C75.3258 19.5119 75.2066 19.1206 74.8887 18.9749L66.8254 15.2869C66.3741 15.0812 66.3684 14.4356 66.8169 14.2242L92.0996 1.24044C92.4856 1.06047 92.9312 1.34614 92.9312 1.77464L95.1109 28.6705Z" fill="#FD874A"/>
                <path d="M72.1924 17.2436L66.499 14.6412C66.4536 14.8897 66.5586 15.164 66.8254 15.2868L72.5217 17.8892C72.5728 17.6321 72.4479 17.3608 72.1924 17.2436Z" fill="white"/>
                <path d="M92.9312 1.77171C92.9312 1.3432 92.4884 1.05753 92.1025 1.24036L90.4052 2.11165L92.4203 26.9393C92.4203 27.3849 91.9492 27.6677 91.5604 27.4535L83.7723 23.197C83.4913 23.0427 83.1366 23.1484 82.9833 23.4312L57.5729 74.2977C57.4281 74.5662 57.1046 74.6748 56.8264 74.552L43.4358 68.6129C43.1492 68.4872 42.8171 68.6072 42.678 68.89C42.678 68.89 31.4132 92.0807 30.8711 92.5435C33.5929 92.552 34.7793 92.552 34.7793 92.552C35.0433 92.6149 35.3129 91.1665 35.4349 90.9237L45.3771 70.6183C45.5162 70.3355 45.8483 70.2155 46.1349 70.3412L59.5256 76.2803C59.8037 76.4031 60.1273 76.2917 60.272 76.026L85.6824 25.1595C85.8357 24.8767 86.1905 24.771 86.4715 24.9253L94.2595 29.1818C94.6483 29.3932 95.1195 29.1104 95.1195 28.6676L92.9369 1.76885L92.9312 1.77171Z" fill="white"/>
                <path d="M95.1109 28.6705C95.1109 29.1133 94.6398 29.399 94.2509 29.1847L86.4657 24.9282C86.1791 24.774 85.8271 24.8797 85.6767 25.1625L60.2635 76.0261C60.1187 76.2946 59.7923 76.406 59.517 76.2832L46.1236 70.3441C45.8369 70.2184 45.5048 70.3413 45.3658 70.6212L35.4235 90.9238C35.3043 91.1695 35.029 92.615 34.7679 92.555C34.7679 92.555 33.6837 92.555 32.0319 92.5464C26.5825 92.5321 14.926 92.4636 15.0708 92.2036L36.3176 52.8754C36.4708 52.6097 36.8001 52.5011 37.0754 52.6354L51.6836 61.0198C51.9532 61.1455 52.2768 61.0484 52.4329 60.797L75.1442 19.8147C75.3258 19.5119 75.2066 19.1206 74.8887 18.9749L66.8254 15.2869C66.3741 15.0812 66.3684 14.4356 66.8169 14.2242L92.0996 1.24044C92.4856 1.06047 92.9312 1.34614 92.9312 1.77464L95.1109 28.6705Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M92.5508 28.6362L88.2651 37.9062" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M86.5566 31.1158L81.5415 41.697" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M52.9637 74.0406L48.8029 83.5306" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M48.7574 71.8181L45.9646 78.0514" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M67.3647 16.2038L64.2114 21.9172" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M71.2161 17.4064L66.1981 26.7421" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.8761 89.8039C10.6689 89.8325 10.4475 89.7668 10.2857 89.6068C10.0189 89.3383 7.74836 86.7587 10.5894 78.6313C11.3472 76.4603 12.017 74.7548 12.6045 73.2522C14.1599 69.2785 14.9404 67.2845 14.7616 63.4651C14.7417 63.0766 15.0425 62.7481 15.4257 62.7309C15.8117 62.7138 16.1381 63.0109 16.1551 63.3994C16.3509 67.5188 15.4796 69.7384 13.9044 73.7664C13.3197 75.2576 12.6584 76.9516 11.9063 79.097C9.3491 86.4159 11.2479 88.587 11.2677 88.607C11.5402 88.8812 11.543 89.324 11.2706 89.6011C11.1599 89.7154 11.018 89.7811 10.8732 89.8011L10.8761 89.8039Z" fill="white" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.4542 63.1748C19.6718 62.9337 22.8851 59.0914 22.6313 54.5927C22.3775 50.094 18.7527 46.6425 14.5351 46.8835C10.3175 47.1246 7.10418 50.9669 7.35798 55.4656C7.61178 59.9643 11.2366 63.4158 15.4542 63.1748Z" fill="white" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.343 61.204C18.5403 61.0213 20.9762 58.1086 20.7838 54.6983C20.5914 51.2881 17.8435 48.6716 14.6463 48.8544C11.4491 49.0371 9.01314 51.9498 9.20554 55.3601C9.39793 58.7703 12.1458 61.3867 15.343 61.204Z" fill="white" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.7757 58.4144L14.736 57.6945C14.2592 57.7002 13.7909 57.5888 13.5099 57.4374L13.6745 56.5404C13.9839 56.6975 14.4096 56.8318 14.8722 56.8061C15.2781 56.7832 15.5449 56.6004 15.5279 56.2976C15.5108 56.0091 15.2753 55.8405 14.7388 55.6834C13.964 55.4549 13.4248 55.1064 13.3822 54.3722C13.3453 53.7066 13.754 53.1581 14.5061 52.9553L14.4664 52.2354L15.1617 52.1954L15.1986 52.861C15.6754 52.8553 16.0018 52.9438 16.2431 53.0524L16.0841 53.918C15.894 53.8465 15.5591 53.6894 15.0482 53.718C14.5856 53.7437 14.4493 53.9637 14.4607 54.1779C14.4749 54.4265 14.7332 54.5722 15.3491 54.7807C16.2119 55.0492 16.5752 55.4463 16.6149 56.1291C16.6518 56.8032 16.2374 57.4031 15.4285 57.6003L15.4711 58.3716L14.7757 58.4116V58.4144Z" fill="#41341E"/>
                <path d="M9.01702 85.2246C9.01702 85.2246 8.75307 83.2621 6.89688 81.5595C4.10409 78.9999 1.49295 80.1197 2.03504 82.2451C2.57998 84.3676 5.72754 84.7447 7.3737 84.9847L9.01986 85.2246H9.01702Z" fill="#a0ff2a" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.2611 78.697C12.2611 78.697 12.4626 76.7287 14.262 74.9661C16.9697 72.3151 19.6177 73.3521 19.1409 75.4918C18.6669 77.6315 15.5307 78.1085 13.8959 78.4028L12.2611 78.697Z" fill="#a0ff2a"/>
                <path d="M16.473 73.5464C17.6111 73.6092 18.3121 74.4577 18.0482 75.646C17.5742 77.7857 14.438 78.2656 12.8032 78.557C12.6017 78.5942 12.4229 78.6256 12.2696 78.6542C12.2668 78.6799 12.2639 78.697 12.2639 78.697L13.8987 78.4028C15.5335 78.1085 18.6697 77.6315 19.1437 75.4918C19.4843 73.9549 18.2156 72.9865 16.4701 73.5464H16.473Z" fill="white"/>
                <path d="M12.2611 78.697C12.2611 78.697 12.4626 76.7287 14.262 74.9661C16.9697 72.3151 19.6177 73.3521 19.1409 75.4918C18.6669 77.6315 15.5307 78.1085 13.8959 78.4028L12.2611 78.697Z" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.7776 68.6414C15.7776 68.6414 16.0841 65.6276 18.84 62.9309C22.9866 58.8743 27.0339 60.4598 26.3073 63.7364C25.5808 67.0131 20.7842 67.7444 18.2781 68.1929L15.7748 68.6443L15.7776 68.6414Z" fill="#a0ff2a"/>
                <path d="M22.4417 60.6912C24.3007 60.6998 25.4701 62.0224 25.0529 63.9107C24.3263 67.1874 19.5297 67.9187 17.0236 68.3672C16.5099 68.4586 16.104 68.5329 15.7805 68.59C15.7776 68.6214 15.7748 68.6386 15.7748 68.6386L18.2781 68.1872C20.7814 67.7358 25.5808 67.0074 26.3073 63.7308C26.8154 61.4454 24.9961 59.9856 22.4417 60.6884V60.6912Z" fill="white"/>
                <path d="M15.7776 68.6414C15.7776 68.6414 16.0841 65.6276 18.84 62.9309C22.9866 58.8743 27.0339 60.4598 26.3073 63.7364C25.5808 67.0131 20.7842 67.7444 18.2781 68.1929L15.7748 68.6443L15.7776 68.6414Z" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.9556 83.502C10.9556 83.502 11.0861 82.2165 12.2611 81.0653C14.0293 79.3341 15.7578 80.0111 15.4484 81.4081C15.1391 82.805 13.0927 83.1164 12.0227 83.3106L10.9556 83.502Z" fill="#a0ff2a" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.1835 78.917C10.1835 78.917 11.1967 76.9088 10.5524 74.1063C9.58462 69.8898 6.42003 69.2385 5.56289 71.581C4.70575 73.9235 7.4134 76.3231 8.79844 77.6201L10.1835 78.917Z" fill="#a0ff2a" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9678 71.5324C12.9678 71.5324 13.9214 69.7041 13.3679 67.1245C12.5307 63.2451 9.6357 62.6081 8.82114 64.7449C8.00658 66.8817 10.4588 69.1185 11.7133 70.3269L12.9678 71.5324Z" fill="#a0ff2a" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.175 68.57C15.7776 68.6415 19.1011 64.1193 23.3953 63.5137" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9082 78.1857C13.9697 77.3515 15.1532 76.6488 16.4389 76.2317" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.1835 71.1982C12.9082 69.6299 12.3548 68.0701 11.3643 66.8103" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.4531 78.8227C10.192 77.1801 9.63571 75.5375 8.59692 74.2206" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M35.8465 93.4719C35.3611 92.432 34.4331 91.6236 33.3091 91.3179C32.4946 91.0951 31.7141 91.1465 31.013 91.3779C30.1729 89.3439 28.1805 87.9127 25.856 87.9127C24.6186 87.9127 23.4804 88.3212 22.5552 89.0069C21.4483 85.9702 18.5505 83.8019 15.1503 83.8019C12.0084 83.8019 9.29794 85.6502 8.02926 88.327C7.22889 88.0013 6.34053 87.8499 5.40393 87.9384C2.6452 88.2013 0.451266 90.5438 0.351929 93.3319C0.351929 93.3805 0.354767 93.429 0.351929 93.4776H35.8465V93.4719Z" fill="white" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.1588 90.6809C21.7492 89.1497 23.4805 88.3955 24.8797 87.9956" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.46253 89.464C8.49755 88.1413 6.63569 87.8671 5.12292 87.9699" stroke="#41341E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_70_5775">
                <rect width="134" height="93" fill="white" transform="translate(0 0.828979)"/>
                </clipPath>
                </defs>
              </svg>
            </div>
          </Button>
        </LinkInternal>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button asChild size="lg" className="!bg-hover !text-black border-l-2 border-black px-8 rounded-md rounded-l-none h-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                <path d="M6.71181 8.20397L6.71159 8.20375L1.26678 2.75893C1.0944 2.58656 0.997559 2.35276 0.997559 2.10899C0.997559 1.86521 1.0944 1.63141 1.26678 1.45904C1.43915 1.28666 1.67295 1.18982 1.91672 1.18982C2.1605 1.18982 2.3943 1.28666 2.56667 1.45904L8.01137 6.90374L6.71181 8.20397ZM6.71181 8.20397C7.04509 8.53641 7.44063 8.7999 7.8758 8.97938C8.31085 9.15881 8.77697 9.25075 9.24756 9.24997M6.71181 8.20397L11.7835 8.20375M11.7835 8.20375L11.7833 8.20397C11.45 8.53641 11.0545 8.7999 10.6193 8.97938C10.1843 9.15881 9.71814 9.25075 9.24756 9.24997M11.7835 8.20375L17.2283 2.75893C17.4007 2.58656 17.4976 2.35276 17.4976 2.10899C17.4976 1.86521 17.4007 1.63141 17.2283 1.45904C17.056 1.28666 16.8222 1.18982 16.5784 1.18982C16.3346 1.18982 16.1008 1.28666 15.9284 1.45904L10.4837 6.90374L11.7835 8.20375ZM9.24756 9.24997C9.24741 9.24997 9.24726 9.24997 9.24711 9.24997L9.24756 8.99997L9.248 9.24997C9.24786 9.24997 9.24771 9.24997 9.24756 9.24997ZM9.24756 7.41533C8.78404 7.41533 8.33947 7.23137 8.01148 6.90385H10.4836C10.1556 7.23137 9.71108 7.41533 9.24756 7.41533Z" fill="black" stroke="black" stroke-width="0.5"/>
              </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              <DropdownMenuGroup>
                <DropdownMenuItem
                  disabled={
                    !isSushiSwapV3ChainId(chainId as SushiSwapV3ChainId)
                  }
                  asChild
                >
                  <LinkInternal
                    href={`/pool/add?chainId=${chainId}`}
                    className="flex flex-col !items-start gap-1 cursor-pointer"
                  >
                    <div className="flex items-center gap-1 font-medium leading-none">
                      V3 Position
                      <Chip variant="secondary">
                        {isSushiSwapV3ChainId(chainId as SushiSwapV3ChainId)
                          ? 'New 🔥'
                          : 'Unavailable'}
                      </Chip>
                    </div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      Provide liquidity to a V3 liquidity pool.
                    </p>
                  </LinkInternal>
                </DropdownMenuItem>
                {isSushiSwapV2ChainId(chainId as ChainId) ? (
                  <DropdownMenuItem asChild>
                    <LinkInternal
                      href={`/pools/add/v2/${chainId}`}
                      className="flex flex-col !items-start gap-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-1 font-medium leading-none">
                        V2 Position
                      </div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        Provide liquidity to a V2 liquidity pool.
                      </p>
                    </LinkInternal>
                  </DropdownMenuItem>
                ) : null}
                {isTridentChainId(chainId as ChainId) ? (
                  <DropdownMenuItem asChild>
                    <LinkInternal
                      href={`/pool/add/trident/${chainId}`}
                      className="flex flex-col !items-start gap-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-1 font-medium leading-none">
                        Trident Position{' '}
                        <Chip variant="secondary">Deprecated 💀</Chip>
                      </div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        Provide liquidity to a Trident liquidity pool.
                      </p>
                    </LinkInternal>
                  </DropdownMenuItem>
                ) : null}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
        {/* <div className='w-1/2 border-neubrutal rounded-lg h-20'> */}
          {/* <LinkInternal href="/pools/incentivize" className='w-full'>
            <Button
              fullWidth
              asChild
              variant="secondary"
              size="lg"
              className='px-6 font-display text-lg !font-bold !background-card rounded-md !justify-between h-full w-full'
            >
                I want to incentivize a pool
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="223" height="101" viewBox="0 0 223 101" fill="none">
                  <path d="M152.347 9.2512L144.467 17.6412L140.897 23.1212L128.767 24.6612L124.257 28.1412L124.127 34.0412L125.067 40.4512L117.707 51.5512L125.317 92.6212L129.647 98.9612L135.217 99.4512L211.517 82.7812L216.307 79.3212L217.597 74.4312L208.327 31.0212L194.657 25.7512L192.177 15.9912L188.127 12.1212L179.547 13.6412L173.457 15.7412L164.727 10.7712L156.977 8.4212L152.347 9.2512Z" fill="white"/>
                  <path d="M172.577 21.6512L161.907 24.0712L167.757 49.8912L173.417 48.6112C175.867 48.0612 177.397 45.6212 176.847 43.1712L173.357 27.7912L173.927 27.6612C174.887 27.4412 175.487 26.4912 175.277 25.5312L174.707 23.0012C174.487 22.0412 173.537 21.4412 172.577 21.6512Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
                  <path d="M144.237 28.0713C143.277 28.2913 142.677 29.2413 142.887 30.2013L143.457 32.7313C143.677 33.6913 144.627 34.2913 145.587 34.0813L146.157 33.9513L149.647 49.3313C150.197 51.7813 152.637 53.3113 155.087 52.7613L160.747 51.4813L154.897 25.6613L144.227 28.0813L144.237 28.0713Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-miterlimit="10"/>
                  <path d="M172.577 21.6512L161.907 24.0712L162.407 26.2812L173.077 23.8612C174.037 23.6412 174.997 24.2412 175.207 25.2112L174.707 23.0012C174.487 22.0412 173.537 21.4412 172.577 21.6512Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M144.237 28.0712C143.277 28.2912 142.677 29.2412 142.887 30.2012L143.387 32.4112C143.167 31.4512 143.767 30.4912 144.737 30.2812L155.407 27.8612L154.907 25.6512L144.237 28.0712Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M174.087 28.3012L145.747 34.7212C144.437 35.0212 143.127 34.1912 142.827 32.8812L142.257 30.3512C141.957 29.0412 142.787 27.7312 144.097 27.4312L172.437 21.0112C173.747 20.7112 175.057 21.5412 175.357 22.8512L175.927 25.3812C176.227 26.6912 175.397 28.0012 174.087 28.3012ZM144.387 28.7212C143.787 28.8612 143.407 29.4612 143.537 30.0612L144.107 32.5912C144.247 33.1912 144.847 33.5712 145.447 33.4412L173.787 27.0212C174.387 26.8812 174.767 26.2812 174.637 25.6812L174.067 23.1512C173.927 22.5512 173.327 22.1712 172.727 22.3012L144.387 28.7212Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M173.567 49.2413L155.247 53.3913C152.447 54.0213 149.657 52.2613 149.017 49.4613L145.527 34.0813C145.447 33.7213 145.667 33.3713 146.027 33.2913L173.217 27.1313C173.577 27.0513 173.927 27.2713 174.007 27.6313L177.497 43.0113C178.127 45.8113 176.367 48.6013 173.567 49.2413ZM146.967 34.4413L150.307 49.1813C150.777 51.2713 152.867 52.5813 154.957 52.1113L173.277 47.9613C175.367 47.4913 176.677 45.4013 176.207 43.3113L172.867 28.5713L146.967 34.4413Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M167.907 50.5312L160.907 52.1212C160.547 52.2012 160.197 51.9812 160.117 51.6212L154.267 25.8012C154.187 25.4412 154.407 25.0912 154.767 25.0112L161.767 23.4212C162.127 23.3412 162.477 23.5612 162.557 23.9212L168.407 49.7412C168.487 50.1012 168.267 50.4512 167.907 50.5312ZM161.257 50.6812L166.967 49.3912L161.407 24.8612L155.697 26.1512L161.257 50.6812Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M217.097 76.2713C217.017 76.3413 216.947 76.4013 216.867 76.4713C216.847 76.4913 216.827 76.5013 216.797 76.5213C216.797 76.5213 216.727 76.5813 216.687 76.6113C216.547 76.7213 216.397 76.8313 216.247 76.9413C215.177 77.6913 213.917 78.2513 212.517 78.5713L139.357 95.1513C137.957 95.4713 136.577 95.5013 135.287 95.2913C135.107 95.2613 134.927 95.2213 134.747 95.1813C134.697 95.1713 134.657 95.1613 134.607 95.1513C134.607 95.1513 134.557 95.1413 134.527 95.1313C134.407 95.1013 134.277 95.0713 134.157 95.0313C134.127 95.0313 134.107 95.0213 134.077 95.0113C134.017 94.9913 133.957 94.9713 133.897 94.9513C133.857 94.9413 133.827 94.9313 133.787 94.9113C133.717 94.8913 133.647 94.8613 133.577 94.8413C133.537 94.8213 133.497 94.8113 133.447 94.7913C133.357 94.7613 133.277 94.7313 133.197 94.6913C133.167 94.6813 133.137 94.6613 133.107 94.6513L133.067 94.6313C133.067 94.6313 132.987 94.6013 132.947 94.5813C132.807 94.5213 132.657 94.4513 132.517 94.3813C130.607 93.3913 129.197 91.7613 128.727 89.7113L120.567 53.6313L116.667 51.7913L126.167 93.7013C126.627 95.7513 128.047 97.3813 129.957 98.3713C130.097 98.4413 130.237 98.5113 130.387 98.5813C130.427 98.6013 130.467 98.6213 130.507 98.6313L130.547 98.6513C130.547 98.6513 130.607 98.6813 130.637 98.6913C130.717 98.7213 130.807 98.7613 130.887 98.7913C130.927 98.8113 130.967 98.8213 131.017 98.8413C131.087 98.8713 131.157 98.8913 131.227 98.9113C131.267 98.9213 131.297 98.9313 131.337 98.9513C131.397 98.9713 131.457 98.9913 131.517 99.0113C131.547 99.0113 131.567 99.0213 131.597 99.0313C131.717 99.0713 131.837 99.1013 131.967 99.1313C131.997 99.1313 132.017 99.1413 132.047 99.1513C132.047 99.1513 132.137 99.1713 132.187 99.1813C132.367 99.2213 132.547 99.2613 132.727 99.2913C134.017 99.5013 135.397 99.4713 136.797 99.1513L209.957 82.5713C211.357 82.2513 212.617 81.6913 213.687 80.9413C213.837 80.8313 213.987 80.7213 214.127 80.6113C214.167 80.5813 214.197 80.5513 214.237 80.5213C214.237 80.5213 214.277 80.4813 214.307 80.4613C214.407 80.3813 214.497 80.3013 214.597 80.2113C214.617 80.1913 214.637 80.1713 214.657 80.1613C214.707 80.1213 214.747 80.0713 214.797 80.0313C214.827 80.0013 214.857 79.9813 214.877 79.9513C214.927 79.9013 214.987 79.8413 215.037 79.7913C215.067 79.7613 215.097 79.7213 215.127 79.6913C215.187 79.6213 215.257 79.5613 215.317 79.4913C215.337 79.4713 215.357 79.4413 215.377 79.4213L215.407 79.3813C215.407 79.3813 215.467 79.3113 215.497 79.2813C215.597 79.1613 215.697 79.0413 215.797 78.9113C216.417 78.1013 216.867 77.2013 217.117 76.2613L217.097 76.2713Z" fill="#FD874A" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M140.537 23.3412C140.347 23.3812 140.137 23.3412 139.977 23.2112C139.697 22.9812 139.657 22.5612 139.887 22.2812L148.427 11.8012C151.457 8.08123 157.457 6.72123 161.797 8.77123L174.027 14.5412C174.357 14.7012 174.497 15.0912 174.347 15.4212C174.187 15.7512 173.797 15.8912 173.467 15.7412L161.237 9.97123C157.407 8.16123 152.127 9.36123 149.447 12.6412L140.907 23.1212C140.807 23.2412 140.677 23.3112 140.547 23.3512L140.537 23.3412Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M182.937 62.3312C182.787 62.3612 182.627 62.3512 182.487 62.2712L171.167 56.3512C167.477 54.4212 162.987 55.4412 160.487 58.7712L152.817 68.9912C152.627 69.2412 152.287 69.3213 152.007 69.1912L116.387 52.3912C116.207 52.3012 116.067 52.1412 116.027 51.9412C115.987 51.7412 116.027 51.5312 116.157 51.3812L125.067 40.4612C125.297 40.1812 125.717 40.1412 125.997 40.3712C126.277 40.6012 126.317 41.0212 126.087 41.3012L117.707 51.5512L152.077 67.7712L159.427 57.9812C162.317 54.1312 167.507 52.9512 171.777 55.1812L182.627 60.8512L206.647 31.4012L194.657 25.7412C194.327 25.5812 194.187 25.1912 194.337 24.8612C194.497 24.5312 194.887 24.3912 195.217 24.5412L207.967 30.5612C208.147 30.6512 208.287 30.8112 208.327 31.0112C208.367 31.2112 208.327 31.4212 208.197 31.5712L183.307 62.0912C183.207 62.2112 183.077 62.2812 182.937 62.3212V62.3312Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M136.307 99.9012L136.197 99.2512L136.297 99.9012C136.177 99.9212 136.067 99.9412 135.947 99.9612C135.607 100.011 135.287 99.7812 135.217 99.4512C135.217 99.4312 135.217 99.4112 135.207 99.3912C135.157 99.0312 135.407 98.7012 135.767 98.6512C135.867 98.6412 135.967 98.6212 136.077 98.6012L136.307 99.9012Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M134.557 100.051C134.557 100.051 134.467 100.071 134.417 100.071C134.287 100.071 134.157 100.071 134.027 100.071C133.717 100.071 133.467 99.8412 133.407 99.5612C133.397 99.5112 133.387 99.4512 133.387 99.3912C133.397 99.0312 133.707 98.7412 134.067 98.7512C134.177 98.7512 134.297 98.7512 134.407 98.7512C134.717 98.7512 134.987 98.9712 135.057 99.2612C135.067 99.3112 135.077 99.3612 135.077 99.4112C135.077 99.7212 134.857 99.9912 134.567 100.061L134.557 100.051Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M132.867 99.9212C132.787 99.9412 132.697 99.9412 132.617 99.9212C132.567 99.9212 132.517 99.9012 132.467 99.8912C131.467 99.7112 130.527 99.3912 129.657 98.9512C129.627 98.9412 129.607 98.9212 129.577 98.9012C127.507 97.8012 126.017 95.9912 125.527 93.8412L116.027 51.9412C115.967 51.6912 116.057 51.4412 116.257 51.2812C116.457 51.1212 116.727 51.0912 116.947 51.2012L152.567 68.0112C152.747 68.0912 152.877 68.2612 152.927 68.4512C152.977 68.6412 152.927 68.8512 152.817 69.0012L130.967 98.1112C131.557 98.3412 132.177 98.5212 132.827 98.6212C133.187 98.6812 133.427 99.0212 133.367 99.3812C133.327 99.6512 133.117 99.8612 132.857 99.9212H132.867ZM117.607 52.9612L126.807 93.5512C127.177 95.2012 128.247 96.5912 129.757 97.5112L151.267 68.8412L117.607 52.9612Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M135.327 100.031L135.267 99.3712L135.307 100.031C135.197 100.031 135.077 100.051 134.967 100.061C134.637 100.081 134.357 99.8612 134.287 99.5512C134.287 99.5112 134.277 99.4812 134.267 99.4412C134.247 99.0812 134.527 98.7712 134.887 98.7512C134.987 98.7512 135.087 98.7412 135.187 98.7312L135.307 100.041L135.327 100.031Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M135.867 99.9712C135.867 99.9712 135.827 99.9712 135.807 99.9812H135.787C135.687 100.001 135.577 100.011 135.477 100.021C135.147 100.051 134.847 99.8312 134.767 99.5112C134.767 99.4812 134.757 99.4512 134.757 99.4312C134.727 99.0712 134.987 98.7512 135.347 98.7112C135.427 98.7112 135.517 98.6912 135.597 98.6812H135.637C135.997 98.6312 136.327 98.8912 136.377 99.2512C136.417 99.5912 136.197 99.9012 135.867 99.9812V99.9712Z" fill="black"/>
                  <path d="M135.807 99.9812C135.827 99.9712 135.867 99.9712 135.867 99.9712V99.9812C136.197 99.9012 136.417 99.5912 136.377 99.2512C136.327 98.8912 135.997 98.6312 135.637 98.6812H135.597C135.517 98.6912 135.427 98.7112 135.347 98.7112C134.987 98.7512 134.727 99.0712 134.757 99.4312C134.757 99.4512 134.767 99.4812 134.767 99.5112C134.847 99.8312 135.147 100.051 135.477 100.021C135.577 100.011 135.687 100.001 135.787 99.9812H135.807ZM135.807 99.9812L135.727 99.3312" stroke="black" stroke-miterlimit="10"/>
                  <path d="M134.997 100.041C134.997 100.041 134.917 100.051 134.877 100.061C134.747 100.061 134.617 100.071 134.497 100.071C134.177 100.071 133.917 99.8512 133.847 99.5612C133.837 99.5212 133.827 99.4712 133.827 99.4212C133.827 99.0612 134.117 98.7612 134.477 98.7512C134.587 98.7512 134.707 98.7512 134.817 98.7412C135.137 98.7312 135.417 98.9512 135.487 99.2512C135.487 99.2912 135.497 99.3312 135.507 99.3712C135.517 99.6912 135.297 99.9712 134.997 100.041Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M133.277 99.9812C133.207 100.001 133.127 100.001 133.047 99.9912C132.907 99.9712 132.757 99.9512 132.617 99.9312C132.347 99.8912 132.137 99.6812 132.077 99.4212C132.057 99.3412 132.057 99.2512 132.077 99.1712C132.137 98.8112 132.477 98.5712 132.837 98.6212C132.967 98.6412 133.087 98.6612 133.217 98.6712C133.497 98.7012 133.717 98.9212 133.777 99.1812C133.797 99.2512 133.797 99.3312 133.787 99.4112C133.757 99.6912 133.537 99.9112 133.277 99.9712V99.9812Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M134.127 100.041C134.077 100.051 134.017 100.061 133.957 100.061C133.817 100.061 133.687 100.051 133.547 100.041C133.187 100.011 132.907 99.7012 132.937 99.3312C132.967 98.9712 133.277 98.6912 133.647 98.7212C133.757 98.7212 133.877 98.7312 133.987 98.7412H133.997C134.307 98.7512 134.547 98.9712 134.617 99.2512C134.627 99.3012 134.637 99.3612 134.637 99.4212C134.627 99.7312 134.407 99.9712 134.127 100.041Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M136.927 99.7812C136.767 99.8212 136.597 99.8512 136.437 99.8812C136.087 99.9412 135.757 99.7212 135.677 99.3812V99.3512C135.607 98.9912 135.847 98.6412 136.197 98.5812C136.347 98.5512 136.487 98.5212 136.637 98.4912C136.997 98.4112 137.347 98.6312 137.427 98.9912C137.507 99.3512 137.287 99.7012 136.927 99.7812Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M133.697 100.021C133.637 100.031 133.567 100.041 133.497 100.031C133.357 100.021 133.217 100.011 133.087 99.9912C132.727 99.9512 132.467 99.6212 132.507 99.2612C132.547 98.9012 132.877 98.6412 133.237 98.6812C133.357 98.6912 133.477 98.7112 133.597 98.7212C133.887 98.7412 134.127 98.9612 134.187 99.2312C134.197 99.2912 134.207 99.3612 134.197 99.4312C134.177 99.7212 133.957 99.9612 133.687 100.021H133.697Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M211.147 82.9012C210.817 82.9712 210.477 82.7912 210.367 82.4712C210.257 82.1212 210.427 81.7512 210.777 81.6412H210.817C210.897 81.6012 210.977 81.5712 211.057 81.5412C211.397 81.4112 211.777 81.5912 211.907 81.9312C211.907 81.9612 211.927 81.9812 211.927 82.0112C211.997 82.3312 211.827 82.6612 211.507 82.7712C211.407 82.8112 211.307 82.8412 211.207 82.8712H211.187C211.187 82.8712 211.157 82.8812 211.147 82.8912V82.9012Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M213.817 81.5712C213.567 81.6312 213.287 81.5312 213.127 81.3012C212.917 81.0012 212.997 80.5912 213.287 80.3812H213.297C213.827 80.0012 214.317 79.5812 214.737 79.1212L182.477 62.2712C182.297 62.1812 182.177 62.0112 182.137 61.8212C182.097 61.6312 182.137 61.4212 182.267 61.2712L207.157 30.7512C207.317 30.5512 207.577 30.4712 207.817 30.5212C208.067 30.5812 208.257 30.7712 208.307 31.0212L217.807 72.9312C218.297 75.0812 217.727 77.3512 216.337 79.2412C216.327 79.2712 216.307 79.2912 216.287 79.3212C215.687 80.1212 214.947 80.8212 214.097 81.4312L214.057 81.4612H214.037C213.967 81.5212 213.887 81.5612 213.807 81.5812L213.817 81.5712ZM183.817 61.4712L215.587 78.0612C216.557 76.5712 216.917 74.8612 216.547 73.2112L207.347 32.6212L183.817 61.4712Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M212.347 82.4212C212.057 82.4912 211.737 82.3412 211.607 82.0612C211.587 82.0112 211.567 81.9712 211.557 81.9212C211.487 81.6312 211.637 81.3112 211.917 81.1812C212.017 81.1312 212.127 81.0812 212.227 81.0312C212.547 80.8612 212.947 80.9912 213.117 81.3112C213.147 81.3612 213.167 81.4112 213.177 81.4712C213.237 81.7612 213.107 82.0612 212.837 82.2012C212.727 82.2612 212.607 82.3212 212.487 82.3712C212.447 82.3912 212.397 82.4112 212.347 82.4212Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M213.107 82.0212C212.837 82.0812 212.537 81.9612 212.387 81.7112C212.357 81.6512 212.327 81.5912 212.317 81.5212C212.257 81.2512 212.377 80.9512 212.627 80.8012C212.737 80.7412 212.837 80.6712 212.947 80.6112C213.257 80.4212 213.667 80.5112 213.857 80.8212C213.897 80.8912 213.927 80.9612 213.947 81.0312C214.007 81.2912 213.897 81.5812 213.657 81.7312C213.537 81.8012 213.417 81.8812 213.297 81.9512C213.237 81.9812 213.177 82.0112 213.107 82.0212Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M213.467 81.8112C213.207 81.8712 212.917 81.7612 212.767 81.5212C212.727 81.4512 212.697 81.3812 212.677 81.3112C212.617 81.0512 212.727 80.7612 212.967 80.6112C213.077 80.5412 213.177 80.4712 213.287 80.4012C213.587 80.1912 213.997 80.2712 214.207 80.5712C214.257 80.6412 214.287 80.7212 214.307 80.8012C214.367 81.0512 214.267 81.3312 214.037 81.4912C213.917 81.5712 213.797 81.6512 213.677 81.7312C213.607 81.7712 213.537 81.8012 213.467 81.8212V81.8112Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M212.727 82.2312C212.447 82.2912 212.137 82.1612 211.997 81.8912C211.967 81.8412 211.947 81.7812 211.937 81.7312C211.877 81.4512 212.007 81.1412 212.277 81.0012C212.387 80.9412 212.487 80.8912 212.597 80.8312C212.917 80.6512 213.317 80.7612 213.497 81.0712C213.527 81.1312 213.557 81.1912 213.567 81.2512C213.627 81.5312 213.507 81.8212 213.247 81.9712C213.127 82.0412 213.007 82.1012 212.887 82.1712C212.837 82.2012 212.777 82.2212 212.727 82.2312Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M210.087 83.2012C209.727 83.2812 209.377 83.0612 209.297 82.7012C209.217 82.3412 209.437 81.9912 209.797 81.9112C209.947 81.8812 210.087 81.8412 210.227 81.8012C210.567 81.7012 210.937 81.9112 211.037 82.2612V82.2912C211.117 82.6312 210.917 82.9812 210.577 83.0712C210.417 83.1112 210.257 83.1512 210.087 83.1912V83.2012Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M210.677 83.0512C210.337 83.1312 209.987 82.9312 209.887 82.5912V82.5512C209.797 82.2112 209.997 81.8712 210.337 81.7712C210.447 81.7412 210.547 81.7112 210.647 81.6812C210.997 81.5712 211.367 81.7612 211.477 82.1112C211.477 82.1312 211.487 82.1512 211.487 82.1712C211.557 82.5012 211.367 82.8412 211.047 82.9412C210.937 82.9812 210.827 83.0112 210.707 83.0412H210.677V83.0512Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M211.947 82.6012C211.637 82.6712 211.317 82.5112 211.197 82.2112C211.177 82.1712 211.167 82.1412 211.157 82.1012C211.087 81.7912 211.247 81.4712 211.547 81.3512C211.647 81.3112 211.757 81.2612 211.857 81.2112C212.187 81.0612 212.577 81.2012 212.737 81.5312C212.757 81.5712 212.777 81.6212 212.787 81.6612C212.857 81.9612 212.707 82.2712 212.417 82.4012C212.297 82.4512 212.187 82.5012 212.067 82.5512C212.027 82.5712 211.997 82.5812 211.957 82.5912L211.947 82.6012Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M211.557 82.7612C211.237 82.8312 210.907 82.6612 210.787 82.3512C210.777 82.3212 210.767 82.2912 210.757 82.2612C210.687 81.9412 210.857 81.6212 211.167 81.5012C211.267 81.4612 211.367 81.4212 211.457 81.3912C211.797 81.2512 212.177 81.4112 212.317 81.7512C212.327 81.7912 212.347 81.8212 212.347 81.8612C212.417 82.1712 212.257 82.4912 211.957 82.6112C211.847 82.6512 211.747 82.7012 211.637 82.7412C211.607 82.7512 211.577 82.7612 211.547 82.7712L211.557 82.7612Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M210.087 83.2012L136.927 99.7812C134.377 100.361 131.797 100.061 129.647 98.9512C129.477 98.8612 129.347 98.7012 129.307 98.5112C129.267 98.3212 129.307 98.1212 129.427 97.9712L159.427 57.9812C162.317 54.1312 167.507 52.9512 171.777 55.1812L216.087 78.3312C216.257 78.4212 216.387 78.5812 216.427 78.7712C216.467 78.9612 216.427 79.1612 216.307 79.3112C214.847 81.2412 212.637 82.6212 210.087 83.1912V83.2012ZM130.967 98.1112C132.687 98.8012 134.667 98.9412 136.637 98.4912L209.797 81.9112C211.767 81.4612 213.497 80.4912 214.747 79.1212L171.157 56.3512C167.467 54.4212 162.977 55.4412 160.477 58.7712L130.967 98.1112Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M182.937 62.3312C182.787 62.3612 182.627 62.3512 182.487 62.2712L171.167 56.3512C167.477 54.4212 162.987 55.4412 160.487 58.7712L152.817 68.9912C152.627 69.2412 152.287 69.3212 152.007 69.1912L129.137 58.4012C128.957 58.3112 128.817 58.1512 128.777 57.9512L123.227 33.4512C122.327 29.5012 124.817 25.5512 128.767 24.6612L185.077 11.9012C189.027 11.0012 192.977 13.4912 193.867 17.4412L199.417 41.9412C199.457 42.1412 199.417 42.3512 199.287 42.5012L183.307 62.1012C183.207 62.2212 183.077 62.2912 182.937 62.3312ZM165.087 54.3112C167.277 53.8112 169.647 54.0812 171.777 55.1912L182.627 60.8612L198.067 41.9312L192.587 17.7412C191.857 14.5012 188.617 12.4612 185.377 13.1912L129.057 25.9512C125.817 26.6812 123.777 29.9212 124.507 33.1612L129.987 57.3512L152.077 67.7812L159.427 57.9912C160.867 56.0712 162.887 54.8112 165.087 54.3112Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M138.307 19.2112C138.027 19.2712 137.717 19.1412 137.577 18.8812L133.517 11.2412C133.347 10.9212 133.467 10.5212 133.787 10.3512C134.107 10.1812 134.507 10.3012 134.677 10.6212L138.737 18.2612C138.907 18.5812 138.787 18.9812 138.467 19.1512C138.417 19.1812 138.357 19.2012 138.307 19.2112Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M141.587 17.7812C141.587 17.7812 141.557 17.7812 141.537 17.7812C141.177 17.8412 140.837 17.5912 140.787 17.2312L139.477 8.6812C139.427 8.3212 139.667 7.9812 140.027 7.9312C140.387 7.8712 140.727 8.1212 140.777 8.4812L142.087 17.0312C142.137 17.3712 141.917 17.7012 141.577 17.7712L141.587 17.7812Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M135.307 21.1112C135.097 21.1612 134.877 21.1112 134.717 20.9512L128.367 15.0812C128.097 14.8312 128.087 14.4212 128.327 14.1512C128.577 13.8812 128.987 13.8712 129.257 14.1112L135.607 19.9812C135.877 20.2312 135.887 20.6412 135.647 20.9112C135.557 21.0112 135.437 21.0812 135.307 21.1112Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M176.317 11.2012C176.257 11.2112 176.207 11.2212 176.147 11.2212C175.787 11.2012 175.497 10.9012 175.517 10.5312L175.887 1.88122C175.907 1.52122 176.207 1.23122 176.577 1.25122C176.937 1.27122 177.227 1.57122 177.207 1.94122L176.837 10.5912C176.827 10.8912 176.607 11.1412 176.327 11.2112L176.317 11.2012Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M172.737 11.3112C172.407 11.3912 172.057 11.1912 171.957 10.8612L169.447 2.58119C169.337 2.23119 169.537 1.86119 169.887 1.76119C170.237 1.65119 170.607 1.85119 170.707 2.20119L173.217 10.4812C173.327 10.8312 173.127 11.2012 172.777 11.3012C172.757 11.3012 172.747 11.3012 172.727 11.3112H172.737Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M179.837 11.6212C179.707 11.6512 179.577 11.6412 179.447 11.5912C179.107 11.4612 178.947 11.0712 179.077 10.7312L182.277 2.69122C182.407 2.35122 182.797 2.19122 183.137 2.32122C183.477 2.45122 183.637 2.84122 183.507 3.18122L180.307 11.2212C180.227 11.4312 180.047 11.5712 179.837 11.6212Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <path d="M213.797 86.9512C213.267 87.0712 212.787 87.1412 212.367 87.1812C212.007 87.2212 211.677 86.9512 211.647 86.5912C211.607 86.2312 211.877 85.9012 212.237 85.8712C213.437 85.7512 215.237 85.3512 217.017 84.1312C217.557 83.7612 219.217 82.6212 220.257 80.4712C221.767 77.3612 220.947 74.2712 220.527 73.0812C220.407 72.7412 220.587 72.3612 220.927 72.2412C221.267 72.1212 221.647 72.3012 221.767 72.6412C222.247 73.9812 223.167 77.4812 221.437 81.0512C220.247 83.5212 218.367 84.8012 217.757 85.2212C216.367 86.1712 214.967 86.6812 213.787 86.9512H213.797Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                  <g clip-path="url(#clip0_2018_254)">
                  <path d="M125.422 68.9589H71.5815C68.6015 68.9589 66.1915 71.3689 66.1915 74.3489V86.2789C66.1915 89.2589 68.6015 91.6689 71.5815 91.6689H71.9615L72.7415 95.5889C72.5815 96.7289 73.8415 97.5289 74.8015 96.8989L82.9715 91.6689H125.422C128.402 91.6689 130.812 89.2589 130.812 86.2789V74.3489C130.812 71.3689 128.402 68.9589 125.422 68.9589Z" fill="#8ef102"/>
                  <path d="M70.1915 76.7289C70.1915 74.6889 71.8415 73.0389 73.8815 73.0389H130.632C130.042 70.6989 127.942 68.9589 125.422 68.9589H71.5815C68.6015 68.9589 66.1915 71.3689 66.1915 74.3489V86.2789C66.1915 88.7689 67.8915 90.8489 70.1915 91.4689V76.7289Z" fill="white"/>
                  <path d="M75.9616 95.749H73.8816C73.4816 95.749 73.1016 95.669 72.7316 95.549V95.589C72.5816 96.729 73.8316 97.529 74.8016 96.899L76.0316 96.109L75.9616 95.749Z" fill="white"/>
                  <path d="M125.422 68.9589H71.5815C68.6015 68.9589 66.1915 71.3689 66.1915 74.3489V86.2789C66.1915 89.2589 68.6015 91.6689 71.5815 91.6689H71.9615L72.7415 95.5889C72.5815 96.7289 73.8415 97.5289 74.8015 96.8989L82.9715 91.6689H125.422C128.402 91.6689 130.812 89.2589 130.812 86.2789V74.3489C130.812 71.3689 128.402 68.9589 125.422 68.9589Z" stroke="#2A250F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M77.7415 80.7689H120.932" stroke="#2A250F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.96153 34.5389H60.8015C63.7815 34.5389 66.1915 36.9489 66.1915 39.9289V51.8589C66.1915 54.8389 63.7815 57.2489 60.8015 57.2489H60.4215L59.6415 61.1689C59.8015 62.3089 58.5415 63.1089 57.5815 62.4789L49.4115 57.2489H6.96153C3.98153 57.2489 1.57153 54.8389 1.57153 51.8589V39.9289C1.57153 36.9489 3.98153 34.5389 6.96153 34.5389Z" fill="white" stroke="#2A250F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M54.6516 46.3489H11.4615" stroke="#FD874A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_2018_254">
                  <rect width="131.75" height="65.08" fill="white" transform="translate(0.321533 33.2889)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
            </Button>
          </LinkInternal> */}
        {/* </div> */}
      </div>
    </section>
  )
}
