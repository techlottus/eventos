import React from 'react'
import Aspect from './Aspect'
import Image from './Image'
import cn from 'classnames'


export type CardType = {
  id: string
  attributes: {
    name: string
    desktop_image: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
    start_datetime: string
    end_datetime: string
    register_start_datetime: string
    register_end_datetime: string
    status: string
    is_private: boolean
    category: {
      data: {
        attributes: {
          name: string
        }
      }
    }
  }
}

export const Card = (props: CardType) => {
  const cardData = props?.attributes;
  const labelStatus:{draft:string,active:string,finished:string} = {
    draft: 'Próximamente',
    active: 'Registro abierto',
    finished: 'Finalizado',
  }
  const dateCard = ` ${new Date(cardData?.start_datetime).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' })}  · ${new Date(cardData?.start_datetime).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })} - ${new Date(cardData?.end_datetime).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`;
  return (
    <div className="flex flex-col bg-transparent rounded-lg shadow-md w-[282px] h-full">
      <div className='rounded-t-lg overflow-hidden h-full w-full bg-surface-200'>
        <Aspect ratio='2/1'>
          {cardData?.is_private && <div id="tag-private" className={cn("absolute top-2 right-2 bg-surface-900 text-surface-0 font-texts text-sm font-normal px-2 py-1 rounded z-10")}>
            Exclusivo estudiantes
          </div>}
          <Image classNames={cn("absolute top-0 left-0 w-full h-full rounded-t-lg")} src={cardData?.desktop_image?.data?.attributes?.url} alt="" />
          {cardData?.status && <div id="tag-status" className={cn("absolute bottom-0 right-0 bg-surface-900/70 text-surface-0 font-texts text-sm font-normal px-2 py-1 rounded-tl z-10")}>
            {labelStatus[cardData?.status as keyof typeof labelStatus]}
          </div>}
        </Aspect>
      </div>
      <div className="p-4 flex flex-col gap-2">
        {cardData?.category?.data?.attributes?.name && 
          <div id='tag-category' className='bg-surface-900 text-surface-0 font-texts text-sm font-normal px-3 py-1.5 rounded-3xl w-fit'>
            {cardData?.category?.data?.attributes?.name}
          </div>
        }
        <h3 className="font-headings text-base font-semibold text-surface-900">{cardData?.name}</h3>
        <div className='flex items-center'><span className='material-symbols-outlined text-base'>schedule</span>
        <span className=" ml-2 font-texts font-normal text-surface-950 text-sm">{dateCard}</span></div>
      </div>
    </div>
  )
}
