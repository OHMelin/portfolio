import React from 'react'

const Contact = () => {
  return (
    <div className='p-4 bg-secondary'>
        <div className='max-w-[1080px] m-auto'>
            <h2 className='text-center font-bold text-2xl pb-4'>Contact</h2>
            <p className='text-center pb-8'>Don't hesitate to contact me!<br/>I'm always up for a chat.</p>
            <div className='flex justify-center gap-4'>
              <a className='rounded-md bg-primary p-2 px-8 border border-[#ffffff] border-opacity-25 hover:bg-middle' href="mailto:oliverholstmelin@gmail.com">Email Me</a>
            </div>
        </div>
    </div>
  )
}

export default Contact