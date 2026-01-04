import { useState } from "react";
import { TextColorMenu } from "./TextColorMenu";
import { ParentHighlightIcon } from "../ui/ParentHighlightIcon";

export const TextColor = () => {
    const [open, setOpen] = useState(false)
    const [textColor, setTextColor] = useState('#000');
    const [highlightColor, setHighlightColor] = useState('#fff');

    const addTextColor = (color: string) => {
        setTextColor(color)
    }
    
    const addHighlightColor = (color: string) => {
        setHighlightColor(color)
    }

    return <div className="relative">
        <div>
            <button onClick={() => {
                setOpen(open => !open)
            }}
            className={`flex items-center hover:bg-neutral-700 hover:text-white hover:cursor-pointer p-1.5 rounded-xl ${open ? 'bg-neutral-800' : 'text-neutral-300'}`}>
                <ParentHighlightIcon fillClassName={highlightColor} letterClassName={textColor}></ParentHighlightIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2 mx-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
        {open && <TextColorMenu addTextColor={addTextColor} addHighlightColor={addHighlightColor}></TextColorMenu>}
    </div>
}