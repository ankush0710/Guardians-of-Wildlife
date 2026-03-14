import React from 'react';

const Carausal = ({carousalData}) => {
    return(
        <>
        <div className="w-full mx-auto overflow-hidden relative">
            <div className=''>
            {carousalData.map((d, index) => {
                return(
                    <div className='w-full'>
                        <img key={index} src={d.image} alt="sample-image" className='w-full object-cover flex-shrink-0'/>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}

export default Carausal