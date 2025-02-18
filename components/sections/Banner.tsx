import React from 'react'
import Aspect from '../Aspect'
import Image from '../Image'
import cn from 'classnames'
export type BannerType = {
  title: string
  subtitle: string
  desktopRatio: string
  tabletRatio: string
  mobileRatio: string
  desktopImage: {
    data: {
      attributes: {
        url: string
      }
    }
  }
  tabletImage: {
    data: {
      attributes: {
        url: string
      }
    }
  }
  mobileImage: {
    data: {
      attributes: {
        url: string
      }
    }
  }
  textPosition: string
  ctaUrl: string
  ctaText: string
  contentVariant: string
  overlay: string
}
export const Banner = (bannerData: BannerType) => {
  console.log(bannerData.textPosition)
  // Styles for text position
  const textPositionStyles = cn({
    ['justify-start']: bannerData?.textPosition === 'left_top' || bannerData?.textPosition === 'left_bottom',
    ['text-end justify-end']: bannerData?.textPosition === 'right_bottom' || bannerData?.textPosition === 'right_center' || bannerData?.textPosition === 'right_top',
    ['text-center justify-center']: bannerData?.textPosition === 'center_bottom' || bannerData?.textPosition === 'center' || bannerData?.textPosition === 'center_top',
  })
  // Styles for content-hero container
  const justify = cn({
    ['justify-start']: bannerData?.textPosition === 'left_top' || bannerData?.textPosition === 'right_top' || bannerData?.textPosition === 'center_top',
    ['justify-center']: bannerData?.textPosition === 'center' || bannerData?.textPosition === 'left_center' || bannerData?.textPosition === 'right_center',
    ['justify-end']: bannerData?.textPosition === 'center_bottom' || bannerData?.textPosition === 'right_bottom' || bannerData?.textPosition === 'left_bottom'
  })
  // Styles for overlay
  const overlay = cn({
    ['brightness-50']: bannerData?.overlay === 'black',
    ['opacity-50']: bannerData?.overlay === 'white',
  })
  // Styles for content variant
  const contentVariant = cn({
    ['text-surface-900']: bannerData?.contentVariant === 'dark',
    ['text-surface-0']: bannerData?.contentVariant === 'light',
  })
  return (
    <div id="hero" className="flex w-full h-fit">
      <div className='tablet:hidden mobile:hidden w-full h-full'>
        <Aspect ratio={bannerData?.desktopRatio}>
          <Image classNames={cn("absolute top-0 left-0 w-full h-full", overlay)} src={bannerData?.desktopImage?.data?.attributes?.url} alt="" />
          <div id="container-hero" className={cn("absolute top-0 lef-0 p-10 flex w-full h-full", textPositionStyles)}>
            <div id="content-hero" className={cn("w-1/2 h-full flex flex-col gap-4 ", justify)}>
              {bannerData?.title && <h3 className={cn("font-headings text-6xl font-bold", contentVariant)}>{bannerData?.title}</h3>}
              {bannerData?.subtitle && <p className={cn("font-texts text-lg font-normal", contentVariant)}>{bannerData?.subtitle}</p>}
              {bannerData.ctaUrl && <button className={cn('bg-surface-900 font-bold py-2 px-4 rounded-lg w-fit', contentVariant)}>{bannerData?.ctaText}</button>}
            </div>
          </div>
        </Aspect>
      </div>
      <div className='desktop:hidden mobile:hidden w-full h-full'>
        <Aspect ratio={bannerData?.tabletRatio}>
          <Image classNames={cn("absolute top-0 left-0 w-full h-full", overlay)} src={bannerData?.tabletImage?.data?.attributes?.url} alt="" />
          <div id="container-hero" className={cn("absolute top-0 lef-0 p-10 flex w-full h-full", textPositionStyles)}>
            <div id="content-hero" className={cn("w-full h-full flex flex-col gap-4 ", justify)}>
              {bannerData?.title && <h3 className={cn("font-headings text-6xl font-bold", contentVariant)}>{bannerData?.title}</h3>}
              {bannerData?.subtitle && <p className={cn("font-texts text-lg font-normal", contentVariant)}>{bannerData?.subtitle}</p>}
              {bannerData.ctaUrl && <button className={cn('bg-surface-900 font-bold py-2 px-4 rounded-lg w-fit', contentVariant)}>{bannerData?.ctaText}</button>}
            </div>
          </div>
        </Aspect>
      </div>
      <div className='tablet:hidden desktop:hidden flex flex-col'>
        <Aspect ratio={bannerData?.mobileRatio}>
          <Image classNames={cn("absolute top-0 left-0 w-full h-full")} src={bannerData?.mobileImage?.data?.attributes?.url} alt="" />
        </Aspect>
        <div id="container-hero" className={cn("flex w-full h-full mt-4")}>
            <div id="content-hero" className={cn("w-full h-full flex flex-col gap-4 ")}>
              {bannerData?.title && <h3 className={cn("font-headings text-2xl font-bold")}>{bannerData?.title}</h3>}
              {bannerData?.subtitle && <p className={cn("font-texts text-lg font-normal")}>{bannerData?.subtitle}</p>}
              {bannerData.ctaUrl && <button className={cn('bg-surface-900 font-bold py-2 px-4 rounded-lg w-fit')}>{bannerData?.ctaText}</button>}
            </div>
          </div>
      </div>
    </div>
  )
}
