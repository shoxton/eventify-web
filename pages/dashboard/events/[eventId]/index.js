import Link from "next/link";
import { useRouter } from "next/router";
import { DashboardLayout } from "../../../../components/Layouts/DashboardLayout";
import Session from "./[sessionId]";

export default function Event({}) {
  const router = useRouter();

  const { sessionId } = router.query;

  return (
    <DashboardLayout title={"Rock in Rio 2022"}>
      <div className="flex flex-1">
        <Session id={sessionId} />
        <aside className="w-1/4 p-5">
          <div className="flex flex-col gap-y-3">
            <div className="">
              <span className="text-slate-500 text-xl mb-3 block">
                sábado, 28/07
              </span>
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
            </div>
            <Link href={`/events/1234/Rbm6GXllBiw`}>
              <a className="">
                <div className="bg-white p-4 rounded-md border border-slate-200">
                  <header className="flex justify-between items-start gap-3">
                    <h4 className="font-medium text-lg text-slate-700 mb-1 leading-tight">
                      Guns n' Roses opening
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
        </aside>
      </div>
    </DashboardLayout>
  );
}
