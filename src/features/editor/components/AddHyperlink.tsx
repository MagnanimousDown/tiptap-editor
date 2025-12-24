import { AiOutlineDelete } from "react-icons/ai";
import { IoOpenOutline } from "react-icons/io5";
import { SeparatorLine } from "../ui/SeparatorLine";
import { BsArrowReturnLeft } from "react-icons/bs";
export const AddHyperlink = () => {

    return <div 
    className="absolute w-max bg-[rgba(14,14,17,1)] flex my-1 p-1.5 items-center rounded-2xl border border-white/5 shadow-[0px_16px_48px_0px_rgba(0,0,0,0.5),0px_12px_24px_0px_rgba(0,0,0,0.24),0px_6px_8px_0px_rgba(0,0,0,0.22),0px_2px_3px_0px_rgba(0,0,0,0.12)]">
        <div>
            <input type="text" name="link" id="link" placeholder="Paste a link..." className="outline-none p-1"/>
        </div>
        <div className="flex items-center">
            <button className="ml-4 mr-1">
                <BsArrowReturnLeft />
            </button>
        </div>
        <div className="flex items-center">
            <SeparatorLine></SeparatorLine>
        </div>
        <div>
            <button className="mx-1">
                <IoOpenOutline />
            </button>
        </div>
        <div>
            <button className="mx-2">
                <AiOutlineDelete />
            </button>
        </div>
    </div>
}