import { Footer } from "../Footer";
import { Header } from "../Header";

export function DashboardLayout({children}) {
    return (
        <div className="h-screen flex flex-col">
            <header className="border-b border-slate-200 bg-white">
                <div className="p-5 text-lg font-medium">
                    Dashboard
                </div>
            </header>
            <main className="flex-1 flex">
                <aside className="min-w-[300px] bg-white border-r border-slate-200">
                    Menu
                </aside>
                {children}
            </main>
            <Footer />
        </div>
    )
}