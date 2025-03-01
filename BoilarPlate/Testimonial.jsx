import React, { useState, useRef, useEffect } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle, BsStarFill } from 'react-icons/bs';

const Testimonial = ({ slideImages }) => {
  const [counter, setCounter] = useState(0);
  const slidesRef = useRef(null);

  const goPrev = () => {
    setCounter(prevCounter => (prevCounter === 0 ? slideImages.length - 1 : prevCounter - 1));
  };

  const goNext = () => {
    setCounter(prevCounter => (prevCounter === slideImages.length - 1 ? 0 : prevCounter + 1));
  };

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${counter * 100}%)`;
    }
  }, [counter]);

  return (
    <div className='w-full h-fit  flex justify-center items-center m-auto shadow-xl bg-gray-100'>
      <div className='relative w-fit h-fit flex justify-center items-center overflow-hidden m-auto'>

        <div className='flex w-fit h-[60%] transition-transform duration-1000 ease-in-out' ref={slidesRef}>
          {slideImages.map((item, index) => (
            <div key={index} className='w-full h-full flex-shrink-0 relative text-left'>
              <div className='w-full h-full flex justify-center items-center p-6'>
                <div className="w-[300px] hover:scale-105 bg-white rounded-3xl overflow-hidden flex flex-col justify-center items-center mb-8 shadow-xl transition-all cursor-pointer">
                  <div className="relative overflow-hidden top-6 gap-2">
                    <img src={item.img} alt="img" className="rounded-full w-32 h-32 object-cover shadow-lg" />
                    <p className="absolute bottom-1 text-center px-4 bg-black text-white rounded-2xl left-10 text-sm flex justify-center items-center py-1 gap-1">
                      {item.rating}
                      <BsStarFill className="text-yellow-400" />
                    </p>
                  </div>
                  <div className="flex flex-col px-10 pt-8 text-center text-sm gap-y-2">
                    <p className="font-bold text-xl">{item.name}</p>
                    <p className="text-sm tracking-wider text-gray-400">{item.tagLine}</p>
                    <p className="text-sm text-gray-600">{item.experience}</p>
                    <p className="rounded-2xl bg-green-50 text-sm px-2 py-1 my-2 text-green-800">{item.work}</p>
                  </div>
                  <div className="w-full bg-green-600 p-2">
                    <p className="text-center font-medium text-white">Book a session</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className='absolute top-1/2 transform -translate-y-1/2 right-8 flex justify-center items-center text-black'>
          <button className='bg-transparent text-4xl m-0 hover:scale-105 hover:-translate-x-1 transition-transform ease-linear hover:opacity-100 opacity-90' onClick={goPrev}><BsArrowLeftCircle /></button>
          <button className='bg-transparent text-4xl m-0 hover:scale-105 hover:translate-x-1 transition-transform ease-linear hover:opacity-100 opacity-90' onClick={goNext}><BsArrowRightCircle /></button>
        </div>

        {/* Pagination Dots */}
        <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 mt-2'>
          {slideImages.map((ele, ind) => (
            <button
              key={ind}
              onClick={() => setCounter(ind)}
              className={`bg-black rounded-full p-2 m-0 ${counter === ind ? 'opacity-100' : 'opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;