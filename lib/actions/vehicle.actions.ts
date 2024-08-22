
export async function getVehicles(){
    try {
        let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/catalog/vehicles/`);
        if( !res.ok ) throw new Error('status not ok');

        let data = await res.json();
        return data;
        
    } catch (error: any) {
        console.log('Error fetching vehicles data',error.message);
        return [];
    }
}