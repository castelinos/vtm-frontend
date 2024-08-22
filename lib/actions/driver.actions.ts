interface DriverProps{
    avatar: any;
    name: string;
    contact: string;
}

export async function getDrivers(){
    try {
        let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/catalog/drivers/`);
        if( !res.ok ) throw new Error('status not ok');

        let data = await res.json();
        return data;
        
    } catch (error: any) {
        console.log('Error fetching drivers data',error.message);
        return [];
    }
}

export async function createDriverProfile({ avatar, name, contact }: DriverProps) {
    try {
        let formData = new FormData();

        console.log('---->',avatar);
        
        formData.append("avatar", avatar);
        formData.append("name", name);
        formData.append("contact", contact);

        let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/catalog/drivers`,{
            method:'POST',
            body: formData,
        });

        if( !res.ok ) throw new Error('status not ok');

        let data = await res.json();
        return data;
        
    } catch (error: any) {
        console.log('Error creating drivers profile data',error.message);
        return [];
    }
}