import VehicleCard from "@/components/cards/VehicleCard";
import VehicleProfile from "@/components/forms/VehicleProfile";
import ModalHold from "@/components/shared/ModalHold";
import TitleBar from "@/components/shared/TitleBar";
import { getVehicles } from "@/lib/actions/vehicle.actions";

export default async function Vehicles() {

  const response = await getVehicles();
  
  return (
    <main>
      <TitleBar title="Vehicles" />
      <section className="flex justify-end py-3 px-6">
        <ModalHold>
          <VehicleProfile />
        </ModalHold>
      </section>

      <section className="mx-4 grid grid-cols-2 gap-x-2 gap-y-4">
        {
            response && ( response.data.length > 0 ) && response.data.map((vehicle: any, index:number)=>{
                const { image, vehicleNumber, brandName, vehicleType } = vehicle;
                return(
                  <VehicleCard 
                    key={index} 
                    image={image}
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
