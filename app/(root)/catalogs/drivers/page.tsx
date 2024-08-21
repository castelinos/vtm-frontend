import TitleBar from "@/components/shared/TitleBar";
import { getDrivers } from "@/lib/actions/driver.actions";

export default async function Drivers() {
  let data = await getDrivers();
    
  return (
    <main>
      <TitleBar title="Drivers" />
      <ul>
        {
            data && data.data && data.data.map((driver: any)=>{
                return(
                    <li key={driver?.id} className="">{driver?.name}</li>
                )
            })
        }
      </ul>
    </main>
  );
}
