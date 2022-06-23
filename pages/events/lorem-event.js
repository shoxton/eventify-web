import { Callout } from "../../components/callout";

export default function Event() {
    return (
        <>
            <header className="bg-gradient-to-b from-white to-slate-50 py-5">
                <div className="max-w-7xl mx-auto px-5 py-16 flex">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl text-slate-700 mb-5 font-bold">Lorem ipsum dolor event</h1>
                        <p className="text-xl text-slate-500 mb-5 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad libero consectetur voluptatum dicta.</p>
                        <ul className="text-xl text-slate-700 list-disc marker:text-indigo-400 px-5">
                            <li>June 15th, 2022 &bull; 08:00</li>
                            <li>Online / Hybrid / Location</li>
                        </ul>
                    </div>
                    <div className="w-80 ml-auto bg-white ring-1 ring-slate-200 rounded-md p-5">
                        <span className="block mb-3 text-sm text-red-500 uppercase">Live now</span>
                        <div className="text-slate-500 mb-3">
                            <strong className="block font-medium text-xl">Welcome session & Networking</strong>
                            <span className="block">June 15th, 2022 08:00</span>
                        </div>
                        <div className="flex items-center gap-3 my-5">
                            <div className="flex items-center">
                                <div className="w-8 h-8 ring-1 ring-indigo-500 rounded-full bg-slate-200 hover:shadow-sm"></div>
                                <div className="w-8 h-8 ring-1 ring-indigo-500 rounded-full bg-slate-200 hover:shadow-sm -ml-1.5"></div>
                                <div className="w-8 h-8 ring-1 ring-indigo-500 rounded-full bg-slate-200 hover:shadow-sm -ml-1.5"></div>
                            </div>
                            <span className="text-sm text-slate-500 leading-tight">John Doe, Dom Corleone and 2 others</span>
                        </div>
                        <a href="" className="block px-6 py-3 uppercase text-center text-sm font-bold text-white bg-indigo-500 hover:bg-indigo-700 rounded-md">
                            Join now
                        </a>
                    </div>
                </div>
            </header>
            <section className="max-w-7xl mx-auto px-5 py-10 my-5 flex gap-10 sticky">
                <div className="w-1/5">
                    <h2 className="text-4xl text-slate-700 sticky top-1/3">About the event</h2>
                </div>
                <div className="p-12 ring-1 ring-slate-200 rounded-lg bg-white flex-1">
                    <div className="text-lg text-slate-500 leading-relaxed">
                        <strong>Hello world!</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente voluptatibus neque rem itaque maxime, eum nihil, excepturi provident doloremque porro ad aliquid cupiditate sint vero vitae hic quos molestias!</p>
                        <p>Excepturi provident doloremque porro ad aliquid cupiditate sint vero vitae hic quos molestias!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <ul className="list-disc ml-5 my-3">
                            <li>Lorem</li>
                            <li>Consectur</li>
                            <li>Ipsum dolor</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Labore sapiente voluptatibus</strong> neque rem itaque maxime, eum nihil, excepturi provident doloremque porro ad aliquid cupiditate sint vero vitae hic quos molestias!</p>
                        <p>Excepturi provident doloremque porro ad aliquid cupiditate sint vero vitae hic quos molestias!</p>
                        <p>Lorem ipsum dolor!</p>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-5 py-10 my-5 flex gap-10">
                <div className="w-1/5">
                    <h2 className="text-4xl text-slate-700">Speakers and presences</h2>
                </div>
                <div className="flex-1 flex flex-wrap gap-6">
                    <div className="w-1/3 rounded-lg overflow-hidden ring-1 ring-slate-200 bg-white hover:ring-indigo-500 transition-all">
                        <div className="bg-slate-300 aspect-video"></div>
                        <div className="p-4">
                            <h4 className="text-slate-700 text-lg font-medium">John Doe</h4>
                            <span className="text-slate-500 text-sm block mb-1.5">CTO @ IpsumDolor.com</span>
                            <p className="text-slate-500 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente voluptatibus neque rem itaque maxime.</p>
                        </div>
                    </div>
                    <div className="w-1/3 rounded-lg overflow-hidden ring-1 ring-slate-200 bg-white hover:ring-indigo-500 transition-all">
                        <div className="bg-slate-300 aspect-video"></div>
                        <div className="p-4">
                            <h4 className="text-slate-700 text-lg font-medium">Dom Corleone</h4>
                            <span className="text-slate-500 text-sm block mb-1.5">Owner of italianmafia.com</span>
                            <p className="text-slate-500 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente voluptatibus neque rem itaque maxime.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-5 py-10 my-5 flex gap-10">
                <div className="w-1/5">
                    <h2 className="text-4xl text-slate-700">Programming schedule</h2>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="block text-slate-500 text-lg mb-6">segunda-feira, 08 de junho</span>
                    <div className="flex flex-col gap-6">
                        <div className="group flex flex-col gap-6 bg-white rounded-lg ring-1 ring-slate-200 flex-1 overflow-hidden  hover:ring-1 hover:ring-indigo-500 transition-all">
                            <div className="p-5">
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="text-xl font-medium text-slate-700 mb-1.5">
                                            Welcome session
                                        </h4>
                                        <p className="text-slate-500 mb-1.5 leading-relaxed">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        </p>
                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 ring-1 ring-indigo-500 rounded-full bg-slate-200 hover:shadow-sm"></div>
                                                <div className="w-8 h-8 ring-1 ring-indigo-500 rounded-full bg-slate-200 hover:shadow-sm -ml-1.5"></div>
                                                <div className="w-8 h-8 ring-1 ring-indigo-500 rounded-full bg-slate-200 hover:shadow-sm -ml-1.5"></div>
                                            </div>
                                            <span className="text-sm text-slate-500">John Doe, Dom Corleone and 2 others</span>
                                        </div>
                                    </div>
                                    <div className="h-12 w-12 flex items-center justify-center flex-col rounded-md ring-1 ring-indigo-500 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                        <time className="font-bold text-sm">08:00</time>
                                        <span className="text-sm">8 Jun</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col gap-6 bg-white rounded-lg ring-1 ring-slate-200 flex-1 overflow-hidden  hover:ring-1 hover:ring-indigo-500 transition-all">
                            <div className="p-5">
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="text-xl font-medium text-slate-700 mb-1.5">
                                            Introduction to the event
                                        </h4>
                                        <p className="text-slate-500 mb-1.5 leading-relaxed">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        </p>
                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 ring-1 ring-indigo-500 rounded-full bg-slate-200 hover:shadow-sm"></div>
                                                <div className="w-8 h-8 ring-1 ring-indigo-500 rounded-full bg-slate-200 hover:shadow-sm -ml-1.5"></div>
                                                <div className="w-8 h-8 ring-1 ring-indigo-500 rounded-full bg-slate-200 hover:shadow-sm -ml-1.5"></div>
                                            </div>
                                            <span className="text-sm text-slate-500">John Doe, Dom Corleone and 2 others</span>
                                        </div>
                                    </div>
                                    <div className="h-12 w-12 flex items-center justify-center flex-col rounded-md ring-1 ring-indigo-500 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                        <time className="font-bold text-sm">08:00</time>
                                        <span className="text-sm">8 Jun</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}