import React, { useState } from 'react'
import Section from './Section'

function Experience() {
    return (
        <Section title='Experience' anchor="experience">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                <Job
                    name='Multibranch Online Services'
                    website='www.mbos.uz'
                    date='Sep 2022 - Now'
                    responsibility="Android Developer"
                    technologies={["Android SDK", "Kotlin Coroutines", "MVVM", "Firebase Cloud Messaging", "Dagger2", "Room", "Retrofit2", "Picasso"]}
                >
                    <ul className='flex flex-col gap-2 list-disc pl-10'>
                        <li>
                            Studied the application requirements and reviewed the architecture. Refactored 70% of the base code to MVVM.
                        </li>
                        <li>
                            Optimized network parts and increased algorithm performance by 20%.
                        </li>
                        <li>
                            Added push notification capability (Firebase Cloud Messaging).
                        </li>
                        <li>
                            Replaced some parts with Web Socket for real-time data updates, reducing the load on the backend by 15%.
                        </li>
                        <li>
                            Redesigned and improved UX. Working with the application has become more convenient and efficient.
                        </li>
                    </ul>
                </Job>

                <Job
                    name='Data Learning Station'
                    website='datatalim.uz'
                    date='Jul 2021 - Now'
                    responsibility="Teach Android and Node.js"
                >
                    <ul className='flex flex-col gap-2 list-disc pl-10'>
                        <li>
                            Taught courses on Android development using modern technologies and tools, including Android SDK, Kotlin, MVVM, Room, Retrofit2, Picasso, and others.
                        </li>
                        <li>
                            Participated in projects as an Android consultant, providing support and assistance to novice development teams on issues related to application architecture design, performance optimization, implementation of new features, etc.
                        </li>
                        <li>
                            Developed and implemented a 6-month educational plan for Kotlin Android, which allowed students and course participants to master the basic principles and techniques of Android app development on Kotlin, including the use of Jetpack components, Firebase, asynchronous approaches (Kotlin Coroutines), network libraries, and more.
                        </li>
                    </ul>
                </Job>

                <Job
                    name='Freelance'
                    website='kwork.ru'
                    date='Sep 2019 - Jun 2021'
                    responsibility="Android Developer"
                    technologies="Java, Kotlin, Android SDK, MVVM, MVP, Retrofit, Room, Kotlin Coroutines, Node.js, Typescript Postgresql"
                >
                    <p>
                        Developed Android applications of various levels on freelance platforms such as Kwork and Teamworks. <br /> Most of the work involved small projects that addressed specific tasks, such as:
                    </p>

                    <ul className='flex flex-col gap-2 list-disc pl-10'>
                        <li>
                            Path Tracker utilizing Google Maps to track location and communicate with a backend service
                        </li>
                        <li>
                            Learning Management System for an educational center, consisting of an Android client and a Node.js backend. The project included lesson planning, attendance and grading of students by teachers, as well as viewing schedules and grades by students and parents.
                        </li>
                    </ul>
                    <br />
                    <p>
                        I also worked on other projects that required skills in: Java, Kotlin, Android SDK, Firebase, and various libraries and frameworks.   These experiences have allowed me to gain valuable knowledge in developing mobile applications and working with different clients, as well as honing my skills in problem-solving and project management.
                    </p>
                </Job>

                <Job
                    name='Metal Ornament'
                    date='Nov 2018 - Aug 2019'
                    responsibility="Java Developer"
                    technologies="Java, JavaFX, Spring, Hibernate, Postgresql"
                >
                    <p>
                        Developed an EMS (Employee Management System) for internal use within the organization and provided ongoing support for the project. Conducted an analysis of the company's needs and designed the application accordingly. Developed the backend using Spring and the Postgres database, and the client-side application using JavaFX. After the project was integrated into the company's workflow, working with the client base, payroll calculation, product management, and other processes were greatly simplified.
                    </p>
                </Job>
            </div>
        </Section>
    )
}

function Job(
    { name, website, date, responsibility, technologies, children }
        : { name: string, website?: string, date: string, responsibility: string, technologies?: string[] | string, children: React.ReactNode }
) {

    const [expanded, setExpanded] = useState(false)

    return (
        <div className='border border-white/10 p-3 md:p-3 rounded-md'>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl text-green-400"> {name} </h3>
                <div className='text-sm text-white/40'> {date} </div>
            </div>
            {
                website && (
                    <div className='text-sm py-2'>
                        Web site:
                        <a className='text-green-400 decoration-green-400 decoration-solid decoration-1' href={"https://" + website}> {website} </a>
                    </div>
                )
            }
            <div className='leading-relaxed'>
                <div className="text-sm">
                    <span >Responsibility: </span>
                    {responsibility}
                </div>
                <div className={ "transition-all duration-500 overflow-hidden text-sm " +  (expanded ? 'h-auto mt-8' : 'h-0') }>
                    {children}
                    {
                        technologies && (
                            <div className="mt-5 text-slate-400">
                                <span className='text-slate-300 pr-2 font-bold'>
                                    Used:
                                </span>
                                {
                                    Array.isArray(technologies) ? technologies.join(', ') : technologies
                                }
                            </div>
                        )
                    }
                </div>

                <div 
                    className="mt-5 cursor-pointer text-slate-400"
                    onClick={() => setExpanded((prev) => !prev)}>
                    More details
                </div>
            </div>
        </div>
    )
}

export default Experience