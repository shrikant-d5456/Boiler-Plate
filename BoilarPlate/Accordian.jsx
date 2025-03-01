import React, { useState } from 'react'
import { BsChevronRight, BsX } from 'react-icons/bs';

const Accordian = ({heading, arr }) => {
    return (
        <div className=' w-full border p-4 shadow-xl'>
            <p className=' text-left py-2 px-2 text-2xl font-bold text-slate-900 uppercase'>{heading}</p>
            {arr.map((ele, ind) => (
                <Box ele={ele} key={ind} />
            ))}
        </div>
    )
}

export default Accordian

const Box = ({ ele, ind }) => {

    const [showAns, setShowAns] = useState(false);

    return (
        <div className='w-full text-black border mt-2 rounded'> 
            <div className='flex justify-between items-center px-4  '> 
                <p className='font-bold text-slate-800'>{ele.q}</p> 
                <button 
                    className='p-2 rounded-full bg-transparent text-slate-500 transition-transform duration-200' 
                    onClick={() => setShowAns(!showAns)} 
                > {showAns ? <BsX /> : <BsChevronRight />} 
                </button> 
            </div> 
            <div className={`text-slate-600 text-justify px-4 pb-2 overflow-hidden transition-all duration-300 ${showAns ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`} >
                {showAns && (<p> {ele.a} </p>)} 
            </div> 
        </div>
    )
}


// ================================================================================================
/*
const arr = [
    {
      q: "How are you welcomed",
      a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quasi",
    },
    {
      q: "What services do you provide",
      a: "We offer a wide range of services including web development, graphic design, and digital marketing.",
    },
    {
      q: "How can I contact customer support",
      a: "You can reach our customer support team via email, phone, or live chat available on our website.",
    },
    {
      q: "What are your business hours",
      a: "Our business hours are from 9 AM to 5 PM, Monday to Friday.",
    },
    {
      q: "Do you offer customized solutions",
      a: "Yes, we provide customized solutions tailored to your specific needs and requirements.",
    },
    {
      q: "What is your refund policy",
      a: "We have a 30-day refund policy for any services or products purchased. Please refer to our refund policy page for more details.",
    },
  ];
   
<div className=' w-1/2 flex flex-col text-white h-screen justify-center items-center m-auto'>
<Accordian heading={"hello Developers"} arr={arr}/>
</div>
*/