"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createVehicleProfile } from '@/lib/actions/vehicle.actions';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { VehicleValidation } from '@/lib/validations/vehicle';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';

export default function VehicleProfile(){

    const [image, setImage] = useState<File>();
    const [message, setMessage] = useState("");

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(VehicleValidation),
        defaultValues: {
            image: '',
            vehicle_no: '',
            vehicle_type: '',
            brand_name: '',
            owner_id: '',
            owner_type: '',
            cert_puc: '',
            cert_insurance:'',
        },
    });

    function handleImage(event: ChangeEvent<HTMLInputElement>){
        if( event.target.files && event.target.files.length > 0){
            setImage(event.target.files[0]);
        }
    }

    async function onSubmit(values: z.infer<typeof VehicleValidation>){
        let {
            image,
            vehicle_no,
            vehicle_type,
            brand_name,
            owner_id,
            owner_type,
            cert_puc,
            cert_insurance
        } = values;

        if( image && image.length > 0 ) image = image[0];

        let {message} = await createVehicleProfile({
            image,
            vehicleNumber: vehicle_no,
            vehicleType: vehicle_type,
            brandName: brand_name,
            ownerID: owner_id,
            ownerType: owner_type,
            certPUC: cert_puc[0],
            certInsurance: cert_insurance[0],
        });
        setMessage(message);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <h1 className="text-black text-[32px] righteous font-bold tracking-wide">Create Vehicle Profile</h1>
            <hr className="outline outline-2 text-green-600 w-32 my-2"/>
            <section className="mt-6 flex flex-col gap-6">
                <div className='flex flex-col items-center'>
                    {
                        image ?
                        (
                            <Image 
                            className="object-fit rounded-full w-32 h-32"
                            src={ URL.createObjectURL(image) } 
                            alt="avatar"
                            width={100}
                            height={100}
                            />
                        ): <ImageRoundedIcon className='w-32 h-24'/>
                    }
                    <input type="file" {...register('image')} onChange={(ev)=>handleImage(ev)} />
                </div>
                <input type="text" placeholder="Vehicle No." {...register("vehicle_no")} />
                <input type="text" placeholder="Type" {...register("vehicle_type")} />

                <input type="text" placeholder="Brand Name" {...register("brand_name")} />

                <input type="text" placeholder="Owner ID" {...register("owner_id")} />
                <input type="text" placeholder="Owner Type" {...register("owner_type")} />

                <input type="file" {...register('cert_puc')} />
                <input type="file" {...register('cert_insurance')} />

                <input type="submit" className="cursor-pointer flex-1 py-2 text-white bg-green-700 rounded-md" />
                <section>
                    {
                        message && <div>{ message }</div>
                    }
                </section>
            </section>
        </form>
    )
}