import { useCallback, useState } from "react"
import { AddHyperlink } from "./AddHyperlink";
import { useCurrentEditor } from "@tiptap/react";

export const Hyperlink = () => {
    const [open, setOpen] = useState(false);
    const [previousLink, setPreviousLink] = useState<string | null>(null) 

    const { editor } = useCurrentEditor()
    
    if (!editor) {
        return null
    }

    const getLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        setPreviousLink(previousUrl)
        console.log(`previousUrl is ${previousUrl}`);

    }, [editor])

    const onSetLink = () => setOpen(false);

    return <div className="relative">
        <div>
            <button onClick={() => {
                setOpen(open => !open)
                getLink()
            }}
            className={`hover:bg-neutral-600 hover:text-white hover:cursor-pointer p-1.5 rounded-xl ${open ? 'bg-neutral-700' : 'text-neutral-300'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${open ? 'text-violet-500' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
            </button>
        </div>
        {open && <AddHyperlink previousLink={previousLink} onSetLink={onSetLink}></AddHyperlink>}
    </div>
}