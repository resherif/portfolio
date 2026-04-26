import { useState } from "react";


const Navbar = () => {
    const [Active, setActive] = useState("Home");
    const handleActive = (e: string) => {
        setActive(e);
    }
    return (
        <>

            <nav className="fixed top-0 w-full h-16 bg-indigo-800/45 backdrop-blur-md z-50 border-b border-slate-100 py-5 flex items-center justify-between px-6 md:px-10">
                <h2 className="font-bold text-2xl text-slate-800 tracking-tighter">RS.</h2>
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-900">
                    <li className={ `text-lg  cursor-pointer hover:text-indigo-400 transition-colors ${Active === "Home" ? 'text-indigo-400' : ''}`} onClick={() => handleActive("Home")}><a href="#">Home</a></li>
                    <li className={`text-lg  cursor-pointer hover:text-indigo-400 transition-colors ${Active === "About" ? 'text-indigo-400' : ''}`} onClick={() => handleActive("About")}><a href="#About">About</a></li>
                    <li className={`text-lg  cursor-pointer hover:text-indigo-400 transition-colors ${Active === "Projects" ? 'text-indigo-400' : ''}`} onClick={() => handleActive("Projects")}><a href="#Projects">Projects</a></li>
                    <li className={`text-lg  cursor-pointer hover:text-indigo-400 transition-colors ${Active === "Contact" ? 'text-indigo-400' : ''}`} onClick={() => handleActive("Contact")}   ><a href="#Contact">Contact</a></li>
                </ul>
                
            </nav>
        </>
    )
}


export default Navbar;
