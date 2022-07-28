import { DashboardLayout } from "../../../components/Layouts/DashboardLayout";

export default function Event() {
  return (
    <DashboardLayout title={'Rock in Rio 2022'}>
      <div className="flex flex-1">
        <div className="flex-1">
          <div className="bg-black w-full">
            <div className="bg-slate-500 aspect-video relative mx-auto max-h-[60vh]">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/r_9Kf0D5BTs" title="twenty one pilots: Heavydirtysoul [OFFICIAL VIDEO]" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className="p-8">

            <h2 className="text-2xl leading-relaxed font-bold text-slate-700">
              Twenty One Pilots on stage
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci nostrum quam dolor quibusdam nesciunt asperiores.</p>
          </div>
        </div>
        <aside className="w-1/4">schedule navigation</aside>
      </div>
    </DashboardLayout>
  );
}
