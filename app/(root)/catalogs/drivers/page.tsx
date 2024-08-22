import DriverCard from "@/components/cards/DriverCard";
import DriverProfile from "@/components/forms/DriverProfile";
import ModalHold from "@/components/shared/ModalHold";
import TitleBar from "@/components/shared/TitleBar";
import Modal from "@/components/ui/Modal";
import { getDrivers } from "@/lib/actions/driver.actions";

export default async function Drivers() {

  let response = await getDrivers();
  let showModal=false;

  function setShowModal(value: boolean){
    return value;
  }
    
  return (
    <main>
      <TitleBar title="Drivers" />
      <section className="flex justify-end py-3 px-6">
        <ModalHold>
          <DriverProfile />
        </ModalHold>
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
