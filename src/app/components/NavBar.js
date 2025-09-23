import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex items-center justify-between px-20 py-4 bg-white text-black border-b border-gray-200">
            <Link href='/' className="text-2xl font-bold justify-self-start ">My Portfolio</Link>

            <div className="flex-grow flex justify-end gap-10 font-semibold">
            <Link href='/' className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white">Home</Link>
            <Link href='/about' className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white">About</Link>
            <Link href='/projects' className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white">Projects</Link>
            </div>
        </nav>
    );
}