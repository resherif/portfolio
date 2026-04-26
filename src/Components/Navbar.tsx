import { useState } from "react";


const Navbar = () => {
    const [Active, setActive] = useState("Home");
    const handleActive = (e: string) => {
        setActive(e);
    }
    return (
        <>

            <nav className="fixed top-0 w-full h-16 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 py-5 flex items-center justify-between px-6 md:px-10">
                <h2 className="font-bold text-slate-800 tracking-tighter">RS.</h2>
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <li className={`cursor-pointer hover:text-blue-600 transition-colors ${Active === "Home" ? 'text-blue-600' : ''}`} onClick={() => handleActive("Home")}><a href="#">Home</a></li>
                    <li className={`cursor-pointer hover:text-blue-600 transition-colors ${Active === "About" ? 'text-blue-600' : ''}`} onClick={() => handleActive("About")}><a href="#About">About</a></li>
                    <li className={`cursor-pointer hover:text-blue-600 transition-colors ${Active === "Projects" ? 'text-blue-600' : ''}`} onClick={() => handleActive("Projects")}><a href="#Projects">Projects</a></li>
                    <li className={`cursor-pointer hover:text-blue-600 transition-colors ${Active === "Contact" ? 'text-blue-600' : ''}`} onClick={() => handleActive("Contact")}   ><a href="#Contact">Contact</a></li>
                </ul>
                
            </nav>
        </>
    )
}


export default Navbar;
