import React from 'react'
import {
    FaCarrot,
    FaBookReader,
    FaCode,
    FaDumbbell,
    FaMusic,
    FaGlassCheers,
    FaPlane,
    FaGuitar,
} from 'react-icons/fa'

const icons = [
    {
        logo: FaBookReader,
        tooltip: 'Reading',
    },
    {
        logo: FaPlane,
        tooltip: 'Traveling',
    },
    {
        logo: FaGuitar,
        tooltip: 'Guitar',
    },
    {
        logo: FaCode,
        tooltip: 'Programming',
    },
    {
        logo: FaDumbbell,
        tooltip: 'Working out',
    },
    {
        logo: FaCarrot,
        tooltip: 'Cooking',
    },
    {
        logo: FaMusic,
        tooltip: 'Listening to music',
    },
    {
        logo: FaGlassCheers,
        tooltip: 'Fun with friends',
    },
]

const Sparetime = () => {
    const iconList = icons.map((icon) => {
        const SpecificIcon = icon.logo;

        return (
            <div className='has-tooltip flex justify-center' key={icon.tooltip}>
                <span className='tooltip -mt-12 bg-primary rounded-md p-1 px-2 justify-center'>{icon.tooltip}</span>
                <SpecificIcon className='hover:animate-zooming' size={50}  />
            </div>
        )
    })

    return (
      <div className='p-4 bg-secondary'>
          <div className='max-w-[1440px] m-auto'>
              <h2 className='text-center font-bold text-2xl pb-4'>Sparetime</h2>
              <div className='py-8 flex justify-around flex-wrap gap-4'>
                {iconList}
              </div>
          </div>
      </div>
    )
}

export default Sparetime