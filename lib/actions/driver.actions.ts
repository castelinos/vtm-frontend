
export async function getDrivers(){
    try {
        let res = await fetch('http://localhost:4000/catalog/drivers');
        if( !res.ok ) throw new Error('status not ok');

        let data = await res.json();
        return data;
        
    } catch (error: any) {
        console.log('Error fetching drivers data',error.message);
        return [];
    }
}