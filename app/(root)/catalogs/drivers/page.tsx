import DriverCard from "@/components/cards/DriverCard";
import TitleBar from "@/components/shared/TitleBar";
import { getDrivers } from "@/lib/actions/driver.actions";

export default async function Drivers() {
  let response = await getDrivers();
    
  return (
    <main>
      <TitleBar title="Drivers" />
      <section className="flex justify-end py-3 px-6">
        <input type="submit" value="Create new" className="text-white px-3 py-1 rounded-md bg-green-600"/>
      </section>
      <ul className="mx-4 flex flex-col gap-3">
        {
            response && ( response.data.length > 0 ) && response.data.map((driver: any, index:number)=>{
                const { id, name, contact } = driver;
                return(
                  <DriverCard key={index} id={id} name={name} contact={contact} />
                )
            })
        }
      </ul>
    </main>
  );
}
