import Link from "next/link";
import { useRouter } from "next/router";
import { DashboardLayout } from "../../../../../components/Layouts/DashboardLayout";

export function SessionIframe({ id }) {
  return (
    <div className="flex-1">
      <div className="bg-black w-full">
        <div className="bg-slate-500 aspect-video relative mx-auto max-h-[60vh]">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title="twenty one pilots: Heavydirtysoul [OFFICIAL VIDEO]"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-2xl leading-relaxed font-bold text-slate-700">
          Twenty One Pilots on stage
        </h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          nostrum quam dolor quibusdam nesciunt asperiores.
        </p>
      </div>
    </div>
  );
}

export default function Session({}) {
  const router = useRouter();

  const { sessionId } = router.query;

  return (
    <DashboardLayout title={"Rock in Rio 2022"}>
      <div className="flex flex-1">
        <SessionIframe id={sessionId} />
        <aside className="w-1/4 p-5">
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-3">
              <span className="text-slate-500 text-xl block">
                sábado, 28/07
              </span>
              <Link href={`/dashboard/events/1234/session/r_9Kf0D5BTs`}>
                <a>
                  <div className="bg-white p-4 rounded-md border border-red-500">
                    <header className="flex items-center gap-3 justify-between">
                      <h4 className="font-medium leading-tight text-lg mb-1 text-slate-700">
                        Twenty One Pilots on stage
                      </h4>
                      <span className="text-lg font-medium whitespace-nowrap text-red-500 leading-none inline-block">
                        LIVE
                      </span>
                    </header>
                    <p className="text-lg text-slate-400 leading-tight">
                      The opening show
                    </p>
                  </div>
                </a>
              </Link>

              <Link href={`/dashboard/events/1234/session/Rbm6GXllBiw`}>
                <a className="">
                  <div className="bg-white p-4 rounded-md border border-slate-200">
                    <header className="flex justify-between items-start gap-3">
                      <h4 className="font-medium text-lg text-slate-700 mb-1 leading-tight">
                        Guns n Roses opening
                      </h4>
                      <span className="font-medium text-lg text-slate-500">
                        18:30
                      </span>
                    </header>
                    <p className="text-lg text-slate-400 leading-tight">
                      Singing the (g)old ones
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
