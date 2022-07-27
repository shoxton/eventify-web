import Link from "next/link";
import { useRouter } from "next/router";
import { Gear, House, MagnifyingGlass, Swap, Ticket } from "phosphor-react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function DashboardLayout({children}) {

    const router = useRouter()

    return (
        <div className="h-screen flex flex-col">
            <header className="border-b border-slate-200 bg-white">
                <div className="p-5 text-2xl font-medium">
                    Dashboard
                </div>
            </header>
            <main className="flex-1 flex">
                <aside className="min-w-[275px] bg-white border-r border-slate-200 flex flex-col justify-between">
                    <ul className="flex flex-col p-3 gap-3">
                        <li>
                            <Link href={`/dashboard`}>
                                <a className={`p-3 text-lg flex items-center gap-3 rounded-md ${router.pathname == '/dashboard' ? 'bg-slate-100' : 'text-slate-900 hover:bg-slate-100'}`}>
                                    <House size={32} />
                                    <span>Home</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a href="" className="p-3 text-lg text-slate-900 flex items-center gap-3 rounded-md hover:bg-slate-100">
                                <Ticket size={32} />
                                <span>My tickets</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="p-3 text-lg text-slate-900 flex items-center gap-3 rounded-md hover:bg-slate-100">
                                <MagnifyingGlass size={32} />
                                <span>Find events</span>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <span className="block px-3 text-slate-500 text-xl">My account</span>
                        <ul className="flex flex-col p-3">
                            <li>
                                <a href="" className="p-3 text-lg text-slate-900 flex items-center gap-3 rounded-md hover:bg-slate-100">
                                    <Gear size={32} />
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="p-3 text-lg text-slate-900 flex items-center gap-3 rounded-md hover:bg-slate-100">
                                    <Swap size={32} />
                                    <span>Switch to producer</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                {children}
            </main>
            <Footer />
        </div>
    )
}