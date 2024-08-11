import kinoCat from '../assets/projects/KinoCat.png'
import spic from '../assets/projects/Spic.png'
import tracko from '../assets/projects/Tracko.png'
import midapp from '../assets/projects/MidApp.png'
import github from '../assets/github.svg'
import play from '../assets/play.png'
import uzmega from '../assets/projects/Uzmega.png'
import mbos from '../assets/projects/MBos.png'
import tasks from '../assets/projects/Taskie.png'

import Section from './Section'

function Projects() {
    return (
        <Section title='Projects' anchor='projects'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>

                <App
                    name='Taskie'
                    image={tasks}
                    instrumentals={['Kotlin', 'Android', 'Jetpack Compose', 'Jetpack Components', 'FCM', 'Retrofit2', 'Picasso', 'MVVM', 'Koin', 'Kotlin Coroutines']}
                />

                <App
                    name='MBos'
                    image={mbos}
                    playPage='https://play.google.com/store/apps/details?id=com.umega&hl=ru&gl=US'
                    instrumentals={['Kotlin', 'Android', 'FCM', 'Retrofit2', 'Picasso', 'MVVM', 'Dagger Hilt', 'Kotlin Coroutines']}
                />

                <App
                    name='UzMega'
                    image={uzmega}
                    playPage='https://play.google.com/store/apps/details?id=com.umega&hl=ru&gl=US'
                    instrumentals={['Kotlin', 'Android', 'Firebase Auth', 'FCM', 'Retrofit2', 'MVVM', 'Kotlin Coroutines', 'Node.js', 'PostgreSQL']}
                />

                <App
                    name='Tracko'
                    image={tracko}
                    source='source'
                    instrumentals={['Kotlin', 'Android', 'Firebase Storage', 'Retrofit2', 'MVVM', 'Goolgle Maps', 'Node.js', 'PostgreSQL']}
                />

                <App
                    name='Spic'
                    image={spic}
                    source='source'
                    instrumentals={['Kotlin', 'Android', 'Firebase Storage', 'Coroutines', 'OkHttp', 'Node.js', 'PostgreSQL']}
                />

                <App
                    name='Kino Cat'
                    image={kinoCat}
                    source='source'
                />


                <App
                    name='Mid App'
                    image={midapp}
                    source='source'
                    instrumentals={['Java', 'Spring', 'Hibernate', 'JavaFX']}
                />
            </div>
        </Section>
    )
}




function App(
    { name, image, source, playPage, desc, instrumentals }:
        { name: string, image: string, source?: string, playPage?: string, desc?: string, instrumentals?: string[] }
) {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <img src={image} className='w-full rounded-lg' />
            <div className="flex justify-between items-center">
                <h3 className='text-2xl font-semibold'> {name} </h3>
                <div className="flex gap-2 text-sm">
                    {
                        source && (
                            <a className='p-2 border border-white/20 rounded-md flex gap-2 items-center ' href={source}>
                                <img src={github} width='16px' alt="" />
                                <span className='w-0 md:w-auto overflow-hidden'>Source code</span>
                            </a>
                        )
                    }
                    {
                        playPage && (
                            <a className='p-2 border border-white/20 rounded-md flex gap-2 items-center ' href={playPage}>
                                <img src={play} width='16px' alt="" />
                                <span className='w-0 md:w-auto overflow-hidden'>Google Play</span>
                            </a>
                        )
                    }
                </div>
            </div>
            {
                desc && (<p>{desc}</p>)
            }
            <div className="flex gap-2 flex-wrap">
                {
                    instrumentals?.map(instrumental => (
                        <div className="border px-2 py-1 text-xs rounded-md border-slate-400/30 text-slate-500"> {instrumental} </div>
                    ))
                }
            </div>
        </div>
    )
}


export default Projects