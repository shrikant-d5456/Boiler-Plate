import React, { useState, useRef, useEffect } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const ImageSlider = ({ slideImages }) => {
  const [counter, setCounter] = useState(0);
  const slidesRef = useRef(null);

  const goPrev = () => {
    setCounter(prevCounter => (prevCounter === 0 ? slideImages.length - 1 : prevCounter - 1));
  };

  const goNext = () => {
    setCounter(prevCounter => (prevCounter === slideImages.length - 1 ? 0 : prevCounter + 1));
  };

  useEffect(() => {

    // setTimeout(()=>{
    //   goNext();
    // },5000);

    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${counter * 100}%)`;
      // slidesRef.current.style.transform = `translateY(-${counter * 100}%)`; //up direction
    }
  }, [counter]);

  return (
    <div className='relative w-full h-screen justify-center items-center overflow-hidden m-auto shadow-xl'>
      
      <div className='flex  w-full h-screen transition-transform duration-500 ease-in-out' ref={slidesRef}> {/* for up direction => flex-col */}
        {slideImages.map((ele, index) => (
          <div key={index} className={`w-full h-full flex-shrink-0 relative text-left ${slidesRef ? ' opacity-100' : 'max-h-0 opacity-0'}`}>
            <img src={ele.img} alt='Slide' className='object-cover brightness-50 w-full h-full' />

            <div className=' sm:w-1/2 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8 text-white text-center'>
              <p className='sm:text-8xl text-6xl font-bold uppercase text-left'>{ele.title}</p>
              <hr className='my-4 ml-1' />
              <p className='text-left ml-1'>{ele.description}</p>

              <div className='flex gap-4 mt-4 justify-start text-sm'>
                <button className='px-6 py-3'>
                  {ele.buttonText1}
                </button>
                <button className='px-6 py-3'>
                  {ele.buttonText2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=' absolute top-[80%] right-8 flex justify-center items-center '>
        <button className=' bg-transparent text-4xl m-0 hover:scale-105 hover:-translate-x-1 transition-transform ease-linear hover:opacity-100 opacity-90' onClick={goPrev}><BsArrowLeftCircle /></button>
        <button className=' bg-transparent text-4xl m-0 hover:scale-105 hover:translate-x-1 transition-transform ease-linear hover:opacity-100 opacity-90' onClick={goNext}><BsArrowRightCircle /></button>
      </div>

      <div className=' absolute bottom-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-20 flex a justify-center items-center m-auto gap-2 mt-2'>
        {slideImages.map((ele, ind) => (
          <button
            key={ind}
            onClick={() => setCounter(ind)}
            className={` bg-white rounded-full p-2 m-0 ${counter === ind ? 'opacity-100' : 'opacity-50'}`}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageSlider;


// =============================================================================================
{/*
const slideImages = [
  {
    img: "https://picsum.photos/id/136/1000/500",
    title: "Explore the Mountains",
    description: "Discover the stunning beauty and serene landscapes of the majestic mountains. Enjoy hiking, camping, and breathtaking views.",
    buttonText1: "Read More",
    buttonText2: "See More"
  },
  {
    img: "https://picsum.photos/id/137/1000/500",
    title: "Visit the Beach",
    description: "Experience the sun, sand, and surf at the beautiful beaches. Relax and unwind with a variety of water sports and seaside activities.",
    buttonText1: "Read More",
    buttonText2: "See More"
  },
  {
    img: "https://picsum.photos/id/140/1000/500",
    title: "Adventure in the Forest",
    description: "Immerse yourself in the lush greenery and wildlife of the forest. Enjoy hiking trails, wildlife spotting, and nature photography.",
    buttonText1: "Read More",
    buttonText2: "See More"
  },
  {
    img: "https://picsum.photos/id/139/1000/500",
    title: "City Excursions",
    description: "Explore the vibrant city life, rich culture, and modern attractions. Visit historical landmarks, museums, and enjoy the nightlife.",
    buttonText1: "Read More",
    buttonText2: "See More"
  }
];

<Slider slideImages={slideImages}/>
*/}