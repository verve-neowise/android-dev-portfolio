import React from 'react'
import kinoCat from '../assets/projects/KinoCat.png'
import spic from '../assets/projects/Spic.png'
import tracko from '../assets/projects/Tracko.png'
import midapp from '../assets/projects/MidApp.png'
import github from '../assets/github.svg'
import play from '../assets/play.png'
import Section from './Section'

function Projects() {
    return (
        <Section title='Projects' anchor='projects'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 '>

                <App
                    name='Tracko'
                    image={tracko}
                    source='source'
                    playPage='play-page'
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illo, autem officia tenetur nam suscipit rerum deleniti quae dolorem animi at incidunt eveniet! Praesentium repellendus, accusantium illo doloremque eos accusamus."
                />

                <App
                    name='Spic'
                    image={spic}
                    source='source'
                    playPage='play-page'
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illo, autem officia tenetur nam suscipit rerum deleniti quae dolorem animi at incidunt eveniet! Praesentium repellendus, accusantium illo doloremque eos accusamus."
                />

                <App
                    name='Kino Cat'
                    image={kinoCat}
                    source='source'
                    playPage='play-page'
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illo, autem officia tenetur nam suscipit rerum deleniti quae dolorem animi at incidunt eveniet! Praesentium repellendus, accusantium illo doloremque eos accusamus."
                />


                <App
                    name='Mid App'
                    image={midapp}
                    source='source'
                    playPage='play-page'
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illo, autem officia tenetur nam suscipit rerum deleniti quae dolorem animi at incidunt eveniet! Praesentium repellendus, accusantium illo doloremque eos accusamus."
                />
            </div>
        </Section>
    )
}




function App(
    { name, image, source, playPage, desc }:
        { name: string, image: string, source: string, playPage: string, desc: string }
) {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <img src={image} className='w-full rounded-lg' />
            <div className="flex justify-between items-center">
                <h3 className='text-2xl font-semibold'> {name} </h3>
                <div className="flex gap-2 text-sm">
                    <a className='p-2 border border-white/20 rounded-md flex gap-2 items-center ' href={source}>
                        <img src={github} width='16px' alt="" />
                        Source code
                    </a>
                    <a className='p-2 border border-white/20 rounded-md flex gap-2 items-center ' href={playPage}>
                        <img src={play} width='16px' alt="" />
                        Google Play
                    </a>
                </div>
            </div>
            <p>
                {desc}
            </p>
        </div>
    )
}


export default Projects