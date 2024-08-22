
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