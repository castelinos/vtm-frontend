import Image from "next/image";

export default function Topbar(){
    return(
        <nav className="w-full flex justify-start items-center py-6 px-8 gap-4">
            <div className="flex items-center gap-3">
                <Image alt="logo" src="/assets/vtm-logo.svg" className="w-10 h-10 object-fit rounded-full" width="100" height="100" />
                <h1 className="text-[24px] font-bold capitalize righteous">Insight Board</h1>
            </div>
            <div className="grow">
                <div className="flex justify-end items-center">
                    <input className="bg-gray-100 text-gray-400 rounded-xl h-[32px] w-[450px] pl-4 outline-none" type="text" placeholder="Search" />
                </div>
            </div>
        </nav>
    )
}