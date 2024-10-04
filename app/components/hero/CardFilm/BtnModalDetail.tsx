import { useState } from "react";
import ModalDetail from "../../modalDetail";
import { createPortal } from "react-dom";
import { SvgArrowDown } from "@/app/ui/svg/arrow-down";

export default function BtnModalDetail(){
    const [showModal, setShowModal] = useState(false);
    return(
        <button
        type="button"
        className="size-8 rounded-full border border-gray-300 flex items-center justify-center"
        onClick={() => setShowModal(true)}
        >
            <SvgArrowDown width={10} height={10} />
            {
                showModal &&
                createPortal(
                  <ModalDetail closeModal={() => setShowModal(false)} />,
                  document.body
                )
            }
        </button>
    );
}