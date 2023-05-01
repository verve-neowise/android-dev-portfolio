import React from 'react'

function Section({ title, anchor, children } : { title: string, anchor: string, children: React.ReactNode  }) {
  return (
    <section className='pt-24 md:pt-24 min-h-[100vh] p-3 ' id={anchor}>
        <h1 className="text-3xl mb-5"> {title} </h1>
        <div className="px-4">
          {children}
        </div>
    </section>
  )
}

export default Section