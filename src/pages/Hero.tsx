import androidIcon from '../assets/android.png'
import nodeIcon from '../assets/node.png'

function Hero() {
    return (
        <div id="about" className="p-4 pt-20 md:pt-20 h-screen md:h-screen flex flex-col md:flex-row justify-center md:justify-between items-center ">
            <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl leading-[120%] text-center md:text-start"> Hello, I`m <br />
                    <span className="text-green-400">Jalol Imomaddinov!</span>
                </h1>
                <p className='leading-relaxed text-center md:text-left text-slate-400 w-full md:w-3/4 lg:3/5 mt-7'>
                    Mobile Android and Node.js Backend Developer.
                </p>
            </div>
            <div className="flex mt-10 md:mt-0 md:flex-row justify-center items-center gap-5">
                <img src={androidIcon} className='w-[150px] md:w-[200px]' alt="" />
                <img src={nodeIcon} className='w-[150px] md:w-[200px]'  alt="" />
            </div>
        </div>
    )
}

export default Hero