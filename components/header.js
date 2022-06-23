import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="border-b-2 border-solid border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto p-5 flex items-center gap-6">
                <Link href="/">
                    <a>
                        <Image alt="Logo" src={"/vercel.svg"} width={128} height={24} />
                    </a>
                </Link>
            <input
                type="search"
                name=""
                id=""
                placeholder="Find events"
                className="flex-1 max-w-lg px-4 py-3 rounded-lg ring-1 ring-slate-200"
            />
            <nav className="ml-auto">
                <ul className="flex gap-6">
                <li>
                    <a href="" className="uppercase font-bold text-sm text-indigo-500 hover:underline hover:decoration-slate-200 hover:decoration-1 hover:underline-offset-4">Become a producer</a>
                </li>
                <li>
                    <a href="" className="px-6 py-3  text-indigo-500 ring-1 ring-slate-200  rounded-md uppercase text-sm font-bold hover:bg-indigo-500 hover:text-white" >Login</a>
                </li>
                <li>
                    <a href="" className="px-6 py-3  text-indigo-500 ring-1 ring-slate-200 bg-indigo-500  rounded-md uppercase text-sm font-bold text-white hover:bg-indigo-600">Register</a>
                </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}