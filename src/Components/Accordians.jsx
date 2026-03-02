import React from 'react';
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordian = ({data}) => {
    const [showAnswer, setShowAnswer] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const showSelectQ = (index) => {
        setShowAnswer(index);
        console.log(index);
    }

    return(
        <>
        <div>
            {data.map((items)=>(
                <div className='mt-5 py-6 px-4 bg-[#ECE7D1] border border-gray-100 rounded-lg cursor-pointer overflow-hidden' onClick={()=>showSelectQ(items.id)} isOpen={showAnswer === items.id}>
                    <dt className='flex justify-between items-center'>
                        <p className='font-heading text-lg font-semibold text-[#562F00]'>{items.question}</p>
                        <FontAwesomeIcon icon="fa-solid fa-angle-down" className="text-xl text-[#562F00]"/>
                    </dt>
                    <dd className="my-5">
                        <p className='font-body text-[#8A7650]'>{items.answer}</p>
                    </dd>
                </div>
            ))}
        </div>
        </>
    )
}

export default Accordian

