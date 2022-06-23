export function Callout({title, description, action, url}) {
    return (
        <section className=" bg-indigo-500 my-5">
            <div className="max-w-7xl mx-auto p-6 flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    {description && (
                        <p className="text-slate-50">{description}</p>
                    )}
                </div>
                <a href={url} className="px-6 py-3 w-56 text-center  ring-1 ring-slate-200  rounded-md uppercase text-sm font-bold text-white hover:bg-white hover:text-indigo-500">
                    {action}
                </a>
            </div>
        </section>
    )
}