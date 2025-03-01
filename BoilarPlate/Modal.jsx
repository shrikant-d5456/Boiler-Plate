import React from 'react'

const Modal = ({setModal, modal}) => {
    return (
        <div className=' w-full h-full fixed bg-black/50  z-50'>
            <div className='absolute bottom-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20  w-1/2 h-1/2  flex-col justify-center items-center bg-white text-black p-4'>
                <form action="post">
                    <p className=' font-bold uppercase text-xl my-2'>Form heading</p>
                    <input type="text" className=' px-4 py-2 mb-2 border w-full' placeholder='Enter name'  />
                    <input type="text" className=' px-4 py-2 mb-2 border w-full' placeholder='Enter name'  />
                    <input type="text" className=' px-4 py-2 mb-2 border w-full' placeholder='Enter name'  />
                    <input type="text" className=' px-4 py-2 mb-2 border w-full' placeholder='Enter name'  />
                    <input type="text" className=' px-4 py-2 mb-2 border w-full' placeholder='Enter name'  />
                    <div className='  w-full flex justify-center items-center gap-2 mt-2'>
                    <button type='submit' className='button bg-sky-500'>Submit</button>
                    <button className='button bg-red-400' onClick={()=>setModal(!modal)}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
