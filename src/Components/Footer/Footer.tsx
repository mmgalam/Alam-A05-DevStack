import { FaRegCopyright } from "react-icons/fa"
import FooterLogo from "../../assets/logo-text.png"



// export interface FooterProps {
//     prop: string
// }

export default function Footer() {
    
    return (
        <footer className="container mx-auto my-10">
            <div className="grid grid-cols-12 gap-20 py-10 border-b-2 border-blue-100 justify-between">
                <div className="col-span-5">
                    <img src={FooterLogo} alt="FooterLogo" />
                    <p className="py-4">Curated tools, technologies, and resources for developers building <br /> modern software.</p>
                    <button className="btn">GitHub</button>
                    <button className="btn">Twitter</button>
                    <button className="btn">LinkedIn</button>
                </div>

                <div className="col-span-2">
                    <h2 className="font-semibold pb-3">PRODUCT</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>

                <div className="col-span-2">
                    <h2 className="font-semibold pb-3">COMPANY</h2>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div className="col-span-3">
                    <h2 className="font-semibold pb-3">LEGAL</h2>
                    <ul>
                        <li><a href="#">PrivacyPolicy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>


            </div>

            <div className="flex justify-between pt-7">
                <p className="flex items-center gap-2"><FaRegCopyright /> 2026 Dev Stack. All rights reserved.</p>
                <div className="flex gap-5">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
            
        </footer>
    )
}