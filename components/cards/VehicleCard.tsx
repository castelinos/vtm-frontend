import Image from "next/image";

interface VehicleProps{
    image: string;
    vehicleNumber: string;
    brandName: string,
    vehicleType: string,
}

export default function VehicleCard( props: VehicleProps ){
    return(
        <article key={props.vehicleNumber} className="rounded-xl flex items-center w-full h-48 gap-4 bg-gray-100">
            <div className="px-2 ml-4">
            <Image src={props.image} 
                alt="driver"
                width={100}
                height={100}
                className="object-fit"
            />
            </div>
            <div className="flex flex-col justify-center">
            <h1 className="text-[18px] font-bold righteous tracking-wider">{props?.brandName}</h1>
            <p className="text-[14px] text-gray-500 font-semibold ">Reg No. {props?.vehicleNumber}</p>
            </div>
            <div className="h-full grow flex justify-end items-start mt-4 mr-6">
                <div className="px-6 py-2 bg-gray-600 text-white righteous">{props.vehicleType}</div>
            </div>
        </article>
    )
}