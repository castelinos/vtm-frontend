import { MouseEventHandler } from "react";

interface ModalProps{
    open: boolean;
    onClose: MouseEventHandler;
    children: React.ReactNode
}

export default function Modal({ open, onClose, children}: ModalProps){
    return(
        <section onClick={onClose} className={`fixed z-[5] inset-0 flex justify-center items-center ${open ? "visible bg-black/60":"invisible"}`}>
          {/* Modal body container */}
            <div 
              onClick={(event)=> event.stopPropagation()} 
              className={`bg-white rounded-xl p-6 shadow transition-all shadow ${open ? "scale-100 opacity-100":"scale-125 opacity-0"}`}
            >
              { children }
            </div>
        </section>
    )
}