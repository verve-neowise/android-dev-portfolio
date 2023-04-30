function MenuItem({title, link} : { title: string, link: string }) {
  return (
    <li className='relative'>
        <a className='px-5 py-3 hover:text-green-400 transition-colors duration-500' href={link}> {title} </a>
    </li>
  )
}

export default MenuItem