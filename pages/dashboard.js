import { CalendarPlus, StarFour } from "phosphor-react";
import { DashboardLayout } from "../components/Layouts/DashboardLayout";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="min-h-full w-full text-2xl p-6">
                <div className="max-w-md rounded-md border border-slate-300 border-dashed p-32 flex items-center justify-center">
                    <span className="text-slate-400 text-xl">No events yet</span>
                </div>
            </div>
        </DashboardLayout>
    )
}