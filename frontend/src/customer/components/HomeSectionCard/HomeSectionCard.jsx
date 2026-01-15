import React from 'react'

export const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[16rem] mx-10 border'>
            <div className='h-[14rem] w-[12rem]'>
                <img className='object-cover object-top w-full h-full'
                    src="https://cea.vtexassets.com/arquivos/ids/59287641/Foto-0.jpg?v=638969053608530000"
                    alt="" />
            </div>

            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Tênis Casual Ace Off White</h3>
                <p className='mt-2 text-sm text-gray-500'>Tenis Lendario</p>
            </div>
        </div>
    )
}

export default HomeSectionCard;