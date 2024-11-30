import React from 'react';
import Angular from '../../assets/experience/angular.svg'
import Csharp from '../../assets/experience/c_sharp.svg'
import Css from '../../assets/experience/css.svg'
import Html from '../../assets/experience/html.svg'
import Java from '../../assets/experience/java.svg'
import LogosReact from '../../assets/experience/react.svg'
import Tailwind from '../../assets/experience/tailwind.svg'
import Sass from '../../assets/experience/sass.svg'
import DotNetCore from '../../assets/experience/dot_net_core.svg'
import Photoshop from '../../assets/experience/photoshop.svg'
import Xd from '../../assets/experience/xd.svg'
import Python from '../../assets/experience/python.svg'
import Django from '../../assets/experience/django.svg'
import S3 from '../../assets/experience/aws_s3.svg'
import Cloudfront from '../../assets/experience/aws_cloudfront.svg'
import Vue from '../../assets/experience/vue.svg'
import Javascript from '../../assets/experience/javascript.svg'
import Typescript from '../../assets/experience/typescript.svg'
import Figma from '../../assets/experience/figma.svg'
import Nuxt from '../../assets/experience/nuxt.svg'
import Docker from '../../assets/experience/docker.svg'

const icons = [
    {
        logo: Nuxt,
        tooltip: 'Nuxt',
    },
    {
        logo: Vue,
        tooltip: 'Vue',
    },
    {
        logo: LogosReact,
        tooltip: 'React',
    },
    {
        logo: Angular,
        tooltip: 'Angular',
    },
    {
        logo: Sass,
        tooltip: 'Sass',
    },
    {
        logo: Tailwind,
        tooltip: 'TailwindCSS',
    },
    {
        logo: Html,
        tooltip: 'HTML',
    },
    {
        logo: Css,
        tooltip: 'CSS',
    },
    {
        logo: Figma,
        tooltip: 'Figma',
    },
    {
        logo: Photoshop,
        tooltip: 'Photoshop',
    },
    {
        logo: Xd,
        tooltip: 'AdobeXD',
    },
    {
        logo: Javascript,
        tooltip: 'JavaScript',
    },
    {
        logo: Typescript,
        tooltip: 'TypeScript',
    },
    {
        logo: Java,
        tooltip: 'Java',
    },
    {
        logo: Csharp,
        tooltip: 'C#',
    },
    {
        logo: DotNetCore,
        tooltip: '.NET core',
    },
    {
        logo: Python,
        tooltip: 'Python',
    },
    {
        logo: Django,
        tooltip: 'Django',
    },
    {
        logo: Docker,
        tooltip: 'Docker',
    },
    {
        logo: S3,
        tooltip: 'AWS S3',
    },
    {
        logo: Cloudfront,
        tooltip: 'AWS CloudFront',
    },
]

const Experience = () => {
    const iconList = icons.map((icon) => {
        return (
            <div className='has-tooltip flex justify-center' key={icon.tooltip}>
                <span className='tooltip -mt-12 bg-primary rounded-md p-1 px-2 justify-center'>{icon.tooltip}</span>
                <img className='hover:animate-zooming rounded-lg h-20 max-w-[5rem]' src={icon.logo} alt={icon.tooltip + ' logo'} />
            </div>
        )
    })

    return (
        <div className='p-4 bg-secondary'>
            <div className='max-w-[1300px] m-auto'>
                <h2 className='text-center font-bold text-2xl pb-4'>Experience</h2>
                <div className='py-8 flex justify-around flex-wrap gap-10'>
                    {iconList}
                </div>
            </div>
        </div>
    )
}

export default Experience