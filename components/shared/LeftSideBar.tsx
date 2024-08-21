import Link from "next/link";
import { navLinks } from '../../lib/constants/index.js'

export default function LeftSidebar(){
    return(
        <section className="h-screen w-[300px] bg-gray-100">
            <div className="mt-6 flex flex-col gap-2">
                {
                    navLinks.map((link)=>{
                        return(
                            <div key={link.name} className="flex justify-start items-center gap-4 mx-6 p-2 text-gray-600 bg-gray-200 hover:text-white rounded-lg hover:bg-green-600">
                                <span className="text-[30px] ml-4">{ link.icon }</span>
                                <Link className="text-[18px]" href={link.path}>{link.text}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}