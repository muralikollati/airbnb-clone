
export function FooterList({title, items}) {
    return(
        <div className="m-5">
            <h1 className="text-sm font-semibold text-gray-600">{title}</h1>
            {
                items.map(item=>(
                    <p className="text-sm text-gray-450">{item}</p>
                ))
            }
        </div>
    )
}