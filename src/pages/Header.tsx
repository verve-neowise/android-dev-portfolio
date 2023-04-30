import MenuItem from './MenuItem'

function Header() {
    return (
        <header className='fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm h-20'>
            <div className="container mx-auto py-5 flex justify-between">
                <h2 className='text-2xl'>
                    <span className='font-bold text-green-400'> Android </span>
                    Developer
                </h2>
                <ul className="flex">
                    <MenuItem title='About' link='#about' />
                    <MenuItem title='Skills' link='#skills' />
                    <MenuItem title='Experience' link='#experience' />
                    <MenuItem title='Projects' link='#projects' />
                </ul>
            </div>
        </header>
    )
}

export default Header