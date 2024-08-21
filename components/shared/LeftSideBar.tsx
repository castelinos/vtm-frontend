import Link from "next/link";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function LeftSidebar(){
    return(
        <section className="h-screen w-fit">
            <div className="mt-6 flex flex-col">
                <div className="flex justify-center items-center gap-4 p-4 mx-8">
                    <HomeOutlinedIcon className="text-[30px]" />
                    <Link className="text-[20px] font-light" href="home">Home</Link>
                </div>
            </div>
        </section>
    )
}