interface VehicleProps{
    image: any,
    vehicleNumber: string;
    vehicleType: string;
    brandName: string;
    ownerID: string;
    ownerType: string;
    certPUC: any;
    certInsurance: any;
}

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

export async function createVehicleProfile({
    image, 
    vehicleNumber,
    vehicleType,
    brandName,
    ownerID,
    ownerType,
    certPUC,
    certInsurance,
}: VehicleProps) {
    try {
        let formData = new FormData();

        formData.append("image", image);
        formData.append("vehicle_no", vehicleNumber);
        formData.append("vehicle_type", vehicleType);
        formData.append("brand_name", brandName);
        formData.append("owner_id", ownerID);
        formData.append("owner_type", ownerType);
        formData.append("cert_puc", certPUC);
        formData.append("cert_insurance", certInsurance);


        let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/catalog/vehicles`,{
            method:'POST',
            body: formData,
        });

        if( !res.ok ) throw new Error('status not ok');

        let response = await res.json();
        return response;
        
    } catch (error: any) {
        console.log('Error creating drivers profile data',error.message);
        return { message: error.message };
    }
}