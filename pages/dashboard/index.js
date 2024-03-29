import Link from "next/link";
import { CalendarPlus, StarFour } from "phosphor-react";
import { DashboardLayout } from "../../components/Layouts/DashboardLayout";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="min-h-full w-full text-2xl p-8">
                <h4 className="text-xl mb-3 text-slate-700">My ongoing events</h4>
                <div className="grid grid-cols-4 gap-5">
                    <Link href={`/dashboard/events/1234`}>
                        <div className="rounded-lg border bg-white overflow-hidden hover:cursor-pointer hover:shadow-xl transition">
                            <div className="aspect-video relative flex bg-slate-200 p-3 bg-cover bg-no-repeat">
                                <div className="absolute flex flex-col bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-3">
                                    <span className="uppercase text-xs text-red-300 leading-tight">AO VIVO AGORA</span>
                                    <span className="text-base text-white font-medium leading-relaxed my-1">Performing live now</span>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 ring-1 ring-slate-300 rounded-full bg-white hover:shadow-sm bg-[url('https://i.pravatar.cc/16')] bg-contain"></div>
                                            
                                        </div>
                                        <span className="text-sm text-white/50">Metallica</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <p className="text-base text-slate-700 leading-none mb-1.5">
                                    Rock in Rio 2022
                                </p>
                                <span className="text-sm block uppercase text-slate-500 tracking-widest leading-none">ONLINE</span>
                            </div>
                        </div>
                    </Link>
                    <div className="rounded-lg border bg-white overflow-hidden">
                        <div className="aspect-video relative flex bg-slate-500 p-3 bg-cover bg-no-repeat">
                            <div className="absolute flex flex-col bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-3">
                                <span className="uppercase text-xs text-slate-300 leading-tight">16:30 - Hoje</span>
                                <span className="text-base text-white font-medium leading-relaxed my-1">Ninhos de Mafagafinhos</span>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 ring-1 ring-slate-300 rounded-full bg-white hover:shadow-sm bg-[url('https://i.pravatar.cc/16')] bg-contain"></div>
                                    </div>
                                    <span className="text-sm text-white/50">Ricardo Millos</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <p className="text-base text-slate-700 leading-none mb-1.5">
                                ZOOExperience
                            </p>
                            <span className="text-sm block uppercase text-slate-500 tracking-widest leading-none">PRESENCIAL - São Paulo / SP</span>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}