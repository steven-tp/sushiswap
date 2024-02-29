import { Container, SkeletonBox } from '@sushiswap/ui'
import React from 'react'

export default function SimpleSwapLoading() {
  return (
    <Container maxWidth="screen-3xl" className="grid px-4 lg:grid-cols-3 lg:grid-rows-1 sm:grid-rows-2 sm:grid-cols-1 gap-10">
      <div className='lg:col-span-2 sm:col-span-1 order-2 lg:order-1'>
        <SkeletonBox className='w-full h-full' />
      </div>
      <div className="flex flex-col gap-4 order-1 lg:order-2">
        <div className="flex flex-col gap-2 mb-4 sm:mt-10 mt-2">
          <SkeletonBox className="w-[140px] h-[53px]" />
          <SkeletonBox className="h-[20px] w-[280px]" />
        </div>
        <div className="flex gap-2">
          <SkeletonBox className="h-[36px] w-[125px]" />
          <SkeletonBox className="h-[36px] w-[125px]" />
        </div>
        <SkeletonBox className="w-full h-[92px]" />
        <SkeletonBox className="w-full h-[110px]" />
        <SkeletonBox className="w-full h-[110px]" />
        <SkeletonBox className="w-full h-[52px]" />
      </div>
    </Container>
  )
}
