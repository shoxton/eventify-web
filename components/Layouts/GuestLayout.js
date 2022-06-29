import { Footer } from "../Footer";
import { Header } from "../Header";

export function GuestLayout({children}) {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}