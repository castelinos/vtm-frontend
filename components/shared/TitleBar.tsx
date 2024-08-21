interface TitleBarProps{
    title: string;
    subheading?: string;
}

export default async function TitleBar( props: TitleBarProps ){
    return(
        <section className="rounded-xl mx-4 px-4 py-4 bg-gray-100">
            <h1 className="text-[32px] righteous font-bold">{ props.title }</h1>
            <p className="text-[15px] text-gray-500 font-semibold">{ props.subheading }</p>
        </section>
    )
}