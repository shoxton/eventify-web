import { DashboardLayout } from "../../../components/Layouts/DashboardLayout";

export default function Event() {
  return (
    <DashboardLayout>
      <div className="flex flex-1">
        <div className="flex-1">
          <div className="max-h-[600px] h-full w-full bg-slate-900">
            <div className="bg-slate-500 aspect-video mx-auto h-full"></div>
          </div>
          <div className="p-12">
            <h2 className="text-2xl leading-relaxed font-bold text-slate-700">
              Lorem ipsum dolor sit amet
            </h2>
          </div>
        </div>
        <aside className="w-1/4">schedule navigation</aside>
      </div>
    </DashboardLayout>
  );
}
