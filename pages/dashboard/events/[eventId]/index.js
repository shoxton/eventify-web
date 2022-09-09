import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DashboardLayout } from "../../../../components/Layouts/DashboardLayout";

export default function Event() {
  const router = useRouter();

  const event = {
    title: "lorem ipsum",
    slug: "lorem-ipsum",
    sessions: [
      {
        id: "tAGnKpE4NCI",
        title: "Metallica",
        description: "Nothing Else Matters (Official Music Video)",
        starts_at: Date.now(),
      },
    ],
  };

  return (
    <DashboardLayout title={"Rock in Rio 2022"}>
      <div className="flex-1">
        <div className="h-[50vh] flex items-center relative">
          <div className="bg-black absolute inset-0 overflow-hidden">
            <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/4SUpom7Vn_s?autoplay=1&controls=0" title="Metallica: Nothing Else Matters (Official Music Video)" frameBorder={`0`} allow="accelerometer; autoplay;"></iframe>
          </div>
          <div className="p-12">
            <div className="flex flex-col p-8 rounded-lg bg-white relative max-w-xs h-64">
              <div className="flex-1">
                <div className="pb-2">
                  <span className="inline-block rounded px-2 py-1 uppercase font-bold text-sm text-white bg-red-500">
                    LIVE NOW
                  </span>
                </div>
                <h2 className="text-2xl font-bold leading-tight">
                  Lorem ipsum dolor sit amet consectur
                </h2>
              </div>
              <Link href={`/dashboard/events/1234/session/${event.sessions[0].id}`}>
                <a className="text-indigo-900 font-bold">Watch now</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-12 py-8">
          <div className="flex items-center justify-between">
            <Link href={``}>
              <div className="flex items-center gap-3">
                <div className="rounded overflow-hidden">
                  <img src="https://placehold.jp/90x90.png" alt="" />
                </div>
                <a className="text-xl font-bold">Rock in Rio 2022</a>
              </div>
            </Link>
            <div className="flex gap-3">
              <div className="bg-slate-400 h-10 w-12 rounded"></div>
              <div className="bg-slate-400 h-10 w-36 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
