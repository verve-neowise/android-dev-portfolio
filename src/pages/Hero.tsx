import androidIcon from '../assets/android.png'
import nodeIcon from '../assets/node.png'

function Hero() {
    return (
        <div id="about" className="p-10 md:p-20 h-screen flex justify-between items-center ">
            <div className="flex flex-col">
                <h1 className="text-5xl leading-[120%] text-center md:text-start"> Hello, I`m <br />
                    <span className="text-green-400">Jalol Imomaddinov!</span>
                </h1>
                <p className='leading-relaxed text-slate-400 w-full md:w-3/4 lg:3/5 mt-7'>
                    Mobile Android and Node.js Backend Developer.
                </p>
            </div>
            <div className="flex justify-center items-center gap-5">
                <img src={androidIcon} width={200} alt="" />
                <img src={nodeIcon} width={200} alt="" />
            </div>
        </div>
    )
}

export default Hero