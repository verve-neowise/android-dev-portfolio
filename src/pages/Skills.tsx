import React from 'react'
import Section from './Section'

function Skills() {
    return (
        <Section title='Skills' anchor="skills">
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <h3 className='font-bold text-lg my-6 text-green-400'> Android </h3>
                    <div className='flex flex-col'>
                        <Skill title='Languages' items={['Java', 'Kotlin']} />
                        <Skill title='Android SDK' items={['Activities', 'Fragments', 'Services', 'Push Nofitication']} />
                        <Skill title='Jetpack' items={['Room', 'DataStore', 'Navigation', 'WorkManager', 'Paging']} />
                        <Skill title='Firebase' items={['Auth', 'Cloud Messaging', 'Storage', 'Firestore']} />
                        <Skill title='Archtecture' items={['MVVM', 'MVP', 'MVI', 'Single Activity']} />
                        <Skill title='Asyncronius' items={['RxJava', 'Kotlin Coroutines']} />
                        <Skill title='Networking' items={['OkHttp', 'Retrofit', 'Valley', 'Ktor']} />
                        <Skill title='Dep. Injection' items={['Dagger', 'Hilt', 'Koin']} />
                        <Skill title='UI' items={['Android View (XML)', 'Compose']} />
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-lg my-6 text-green-400'> Node.js </h3>
                    <div className='flex flex-col'>
                        <Skill title='Languages' items={['Javascript', 'Typescript']} />
                        <Skill title='Frameworks' items={['Express', 'Nest.js']} />
                        <Skill title='Templates' items={['Handlebars', 'EJS']} />
                        <Skill title='Databases' items={['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']} />
                        <Skill title='ORM' items={['Sequelize', 'Prisma', 'TypeORM', 'Mongoose']} />
                        <Skill title='Authentication' items={['Passport.js', 'JWT']} />
                        <Skill title='Testing' items={['Jest', 'Mocha']} />
                        <Skill title='Logging' items={['Winston', 'Bunyan']} />
                        <Skill title='Other' items={['gRPC', 'Socket.IO', 'Streams']} />
                    </div>
                </div>
            </div>
        </Section>
    )
}

function Skill({ title, items }: { title: string, items: string[] }) {
    return (
        <div className='flex rounded-sm gap-3'>
            <div className='py-4 text-slate-400 min-w-[120px]'> {title}: </div>
            <div className='py-4'> {items.join(', ')} </div>
        </div>
    )
}


export default Skills