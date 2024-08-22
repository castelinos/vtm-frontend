"use client";
import { useState } from "react"
import Modal from "../ui/Modal";

interface ModalHoldProp{
    children: React.ReactNode;
}

export default function ModalHold({ children }: ModalHoldProp ){

    const [showModal, setShowModal] = useState(false);

    return(
        <div>
          <input onClick={()=>setShowModal(true)} type="submit" value="Create new" className="text-white px-3 py-1 rounded-md bg-green-600"/>
          
          <Modal open={showModal} onClose={()=> setShowModal(false)}>
            <section className="px-12 py-2 rounded-xl">
              { children }
            </section>
          </Modal>
        </div>
    )
}