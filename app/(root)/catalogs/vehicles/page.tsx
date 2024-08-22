import VehicleCard from "@/components/cards/VehicleCard";
import TitleBar from "@/components/shared/TitleBar";
import { getVehicles } from "@/lib/actions/vehicle.actions";

export default async function Vehicles() {

  const response = await getVehicles();
  
  return (
    <main>
      <TitleBar title="Vehicles" />
      <section className="flex justify-end py-3 px-6">
        <input type="submit" value="Create new" className="text-white px-3 py-1 rounded-md bg-green-600"/>
      </section>

      <section className="mx-4 grid grid-cols-2 gap-x-2 gap-y-4">
        {
            response && ( response.data.length > 0 ) && response.data.map((vehicle: any, index:number)=>{
                const { vehicleNumber, brandName, vehicleType } = vehicle;
                return(
                  <VehicleCard 
                    key={index} 
                    vehicleNumber={vehicleNumber} 
                    brandName={brandName} 
                    vehicleType={vehicleType} 
                  />
                )
            })
        }
      </section>
    </main>
  );
}
