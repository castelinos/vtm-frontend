import Image from "next/image";

interface DriverProps{
    id: string;
    name:string;
    contact: string;
}

export default function DriverCard( props: DriverProps ){
    return(
        <article key={props.id} className="rounded-xl flex items-center w-full h-24 gap-4 bg-gray-100">
            <div className="flex flex-col items-start px-6 py-4">
            <Image src="/assets/vtm-logo.svg" 
                alt="driver"
                width={100}
                height={100}
                className="object-fit rounded-full w-10 h-10"
            />
            </div>
            <div className="flex flex-col justify-center">
            <h1 className="text-[18px] font-bold">{props?.name}</h1>
            <p className="text-[14px] text-gray-500 font-semibold ">Contact: {props?.contact}</p>
            </div>
            <div className="grow">

            </div>
        </article>
    )
}