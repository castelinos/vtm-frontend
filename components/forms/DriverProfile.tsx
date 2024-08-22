"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { DriverValidation } from '@/lib/validations/driver';
import * as z from "zod";
import { createDriverProfile } from '@/lib/actions/driver.actions';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

export default function DriverProfile(){

    const [avatar, setAvatar] = useState<File>();

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(DriverValidation),
        defaultValues: {
            avatar: '',
            name: '',
            contact:''
        },
    });

    function handleImage(event: ChangeEvent<HTMLInputElement>){
        if( event.target.files && event.target.files.length > 0){
            setAvatar(event.target.files[0]);
        }
    }

    async function onSubmit(values: z.infer<typeof DriverValidation>){
        let { avatar, name, contact } = values;

        if( avatar && avatar.length > 0 ) avatar = avatar[0];
        await createDriverProfile({ avatar, name, contact })
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <h1 className="text-black text-[32px] righteous font-bold tracking-wide">Create Driver Profile</h1>
            <hr className="outline outline-2 text-green-600 w-32 my-2"/>
            <section className="mt-6 flex flex-col gap-6">
                <div className='flex flex-col items-center'>
                    {
                         avatar && <Image 
                            className="object-fit rounded-full"
                            src={URL.createObjectURL(avatar)} 
                            alt="avatar"
                            width={100}
                            height={100}
                        />
                    }
                    <input type="file" {...register('avatar')} onChange={(ev)=>handleImage(ev)} />
                </div>
                <input type="text" placeholder="Name" {...register("name")} />
                <input type="text" placeholder="Contact" {...register("contact")} />
                <input type="submit" className="cursor-pointer flex-1 py-2 text-white bg-green-700 rounded-md" />
            </section>
        </form>
    )
}