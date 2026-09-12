import BannerImg  from "../../assets/banner-stack.png";
import '../../index.css'

export function Banner() {
    
    return (
        <div className="flex gap-2 justify-between items-center container mx-auto">
            <div className="flex flex-col">
                <h1 className="text-7xl font-extrabold">Build Your Ideal <br />
                <span className="gradient-text">Development Stack</span></h1>
                <p className="my-4">Explore frontend, backend, database, and tooling options, <br /> compare them side by side, and put together the stack that fits your <br />next project.</p>
                <div className="flex gap-2">
                    <button className="explore-btn">Explore Techologies</button>
                    <button className="px-12 py-3 border rounded-xl">Learn More</button>
                </div>
            </div>
            <img src={BannerImg} alt="" />
        </div>
    )
}