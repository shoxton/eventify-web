import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GuestLayout } from "../components/Layouts/GuestLayout";

export default function Home() {
  return (
    <GuestLayout>
      <Head>
        <title>Eventify - Event management made simple</title>
      </Head>
      <main className="bg-slate-50">
        <section className="max-w-7xl mx-auto p-5">
            <h2 className="text-xl font-bold text-slate-700 mb-3">Eventifys' pick</h2>
            <article className="flex bg-white rounded-lg ring-1 ring-slate-200">
                <div className="aspect-video relative flex-1 bg-slate-100">
                    {/* <Image alt="Logo" src="/vercel.svg" layout="fill"  /> */}
                </div>
                <div className="p-10 w-1/2">
                    <small className="text-orange-600 text-md uppercase">Jun, 15th 2022 | 08:30 PM</small>
                    <h3 className="text-slate-700 text-3xl my-3 font-bold">Lorem ipsum dolor</h3>
                    <p className="text-slate-500 mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut blanditiis voluptatem dolorem labore officiis rerum.</p>
                    <Link href={`/events/lorem-event`}>
                    <a className="inline-block px-6 py-3 text-indigo-500 ring-1 ring-slate-200  rounded-md uppercase text-sm font-bold hover:bg-indigo-500 hover:text-white" >View more</a>
                    </Link>
                </div>
            </article>
        </section>
        <section className="max-w-7xl mx-auto p-5">
            <h2 className="text-xl font-bold text-slate-700 mb-3">Find events by category</h2>
            <div className="flex gap-3 p-1 overflow-auto">
                {[1,2,3,4,5,6,7,8].map( category => (
                    <div key={category} className="group relative overflow-hidden flex-shrink-0 w-44 h-64 ring-1 ring-slate-200 rounded-xl">
                        <div className="absolute inset-0">
                            {/* <Image src="https://picsum.photos/200/300" layout="fill" alt="Category image" className="group-hover:scale-110" /> */}
                        </div>
                        <div className="flex relative z-10 p-3 flex-col h-full justify-end bg-gradient-to-t from-slate-600 to-transparent">
                            <h4 className="group-hover:text-slate-50 font-bold uppercase text-sm text-slate-100">Category {category}</h4>
                        </div>
                    </div>
                ) )}
            </div>
        </section>
        <section className="max-w-7xl mx-auto p-5 ">
            <h2 className="text-xl font-bold text-slate-700 mb-3">Upcoming</h2>
            <div className="grid gap-3 grid-cols-4">
            {[1,2,3,4].map( event => (
                <article className="rounded-lg  ring-1 ring-slate-200 " key={event}>
                    <div className="bg-slate-200 aspect-video"></div>
                        <div className="p-3">
                            <small className="text-orange-600 uppercase">Jun, {event} 2022</small>
                            <h4 className="text-lg my-3">Lorem ipsum {event}</h4>
                            <small className="text-slate-700 text-sm">
                                Online / Hybrid / Location
                            </small>
                        </div>
                    </article>
                ) )}
            </div>
        </section>
        <section className="bg-indigo-500 my-5">
            <div className="max-w-7xl mx-auto p-6 flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-white">Looking for something to do?</h3>
                    <p className="text-slate-50">Lorem ipsum dolor sit amet consectur</p>
                </div>
                <a href="" className="px-6 py-3 w-56 text-center  ring-1 ring-slate-200  rounded-md uppercase text-sm font-bold text-white hover:bg-white hover:text-indigo-500">Register now</a>
            </div>
        </section>
        <section className="max-w-7xl mx-auto p-5 ">
            <h2 className="text-xl font-bold text-slate-700 mb-3">Top subscriptions</h2>
            <div className="grid gap-3 grid-cols-4">
            {[1,2,3,4].map( event => (
                <article className="rounded-lg  ring-1 ring-slate-200 " key={event}>
                    <div className="bg-slate-200 aspect-video"></div>
                        <div className="p-3">
                            <small className="text-orange-600 uppercase">Jun, {event} 2022</small>
                            <h4 className="text-lg my-3">Lorem ipsum {event}</h4>
                            <small className="text-slate-700 text-sm">
                                Online / Hybrid / Location
                            </small>
                        </div>
                    </article>
                ) )}
            </div>
        </section>
      </main>
    </GuestLayout>
  );
}
