import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {

    let showLoginBtn = useRouter().pathname != '/login'

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
                className="appearance-none flex-1 max-w-lg px-4 py-3 text-slate-900 placeholder-slate-500 rounded-md ring-1 ring-slate-300 focus:outline-offset-2 focus:outline-indigo-500"
            />
            <nav className="ml-auto">
                <ul className="flex gap-6">
                <li>
                    <a href="" className="uppercase font-medium text-sm text-indigo-600 hover:underline hover:decoration-slate-300 hover:decoration-1 hover:underline-offset-4">Become a producer</a>
                </li>
                {showLoginBtn && (
                    <li>
                        <Link href={`/login`}>
                        <a className="px-6 py-3  text-indigo-500 ring-1 ring-slate-200  rounded-md uppercase text-sm font-bold hover:bg-slate-50" >Login</a>
                        </Link>
                    </li>
                )}
                <li>
                    <a href="" className="px-6 py-3  text-indigo-500 ring-1 ring-slate-200 bg-indigo-500  rounded-md uppercase text-sm font-bold text-white hover:bg-indigo-600">Register</a>
                </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}