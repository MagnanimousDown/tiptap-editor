import { useState } from "react"
import { TextAlignmentMenu } from "./TextAlignmentMenu";

export const MoreOptions = () => {
    const [open, setOpen] = useState(false);

    return <div className="relative">
            <div>
                <button onClick={() => {
                    setOpen(open => !open)
                }}
                className={`hover:bg-neutral-600 hover:text-white hover:cursor-pointer p-1.5 rounded-xl ${open ? 'bg-neutral-700' : 'text-neutral-300'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`size-4 ${open ? 'text-violet-500' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </button>
            </div>
            {open && <TextAlignmentMenu></TextAlignmentMenu>}
    </div>
}