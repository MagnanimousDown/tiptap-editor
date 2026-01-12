import { AiOutlineDelete } from "react-icons/ai";
import { IoOpenOutline } from "react-icons/io5";
import { SeparatorLine } from "../ui/SeparatorLine";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useCurrentEditor, useEditorState } from "@tiptap/react";
import { useCallback, useState } from "react";

export const AddHyperlink = ({ previousLink, onSetLink }: { previousLink: string | null, onSetLink: () => void }) => {
    const [link, setEnteredLink] = useState<string>(previousLink || '');

    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }

    const editorState = useEditorState({
        editor,

        selector: ({ editor }) => {

            return {
                isLink: editor.isActive('link'),
            }
        }
    })

    const setLink = useCallback(() => {
    // const previousUrl = editor.getAttributes('link').href

    // const url = window.prompt('URL', previousUrl)
    // console.log(`url is ${url}`);
    console.log(`Current Url ${link}`);
    
    // cancelled
    if (link === null) {
      return
    }

    // empty
    if (link === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    // update link
    try {
      const urlWithProtocol = link.includes(':') ? link : `https://${link}`  
      editor.chain().focus().extendMarkRange('link').setLink({ href: urlWithProtocol }).run()
    } catch (e: any) {
      alert(e.message)
    }

  }, [editor, link])

    return <div 
    className="absolute w-max bg-[rgba(14,14,17,1)] flex my-1 p-1.5 items-center rounded-2xl border border-white/5 shadow-[0px_16px_48px_0px_rgba(0,0,0,0.5),0px_12px_24px_0px_rgba(0,0,0,0.24),0px_6px_8px_0px_rgba(0,0,0,0.22),0px_2px_3px_0px_rgba(0,0,0,0.12)]">
        <div>
            <input type="url" value={link} name="link" id="link" placeholder={link ? undefined : 'Paste a link...'} className="outline-none p-1" 
                onChange={(e: any) => {
                    setEnteredLink(e.target.value);
                }}
            />
        </div>
        <div className="flex items-center">
            <button className="ml-4 hover:bg-neutral-800 hover:text-white hover:cursor-pointer p-1.5 rounded-xl disabled:hover:cursor-not-allowed" 
                onClick={() => {
                        setLink()
                        onSetLink()
                    }
                }
                disabled={!link}
            >
                <BsArrowReturnLeft />
            </button>
        </div>
        <div className="flex items-center">
            <SeparatorLine></SeparatorLine>
        </div>
        <div>
            <button className="hover:bg-neutral-800 hover:text-white hover:cursor-pointer p-1.5 rounded-xl 
            disabled:hover:cursor-not-allowed"
                onClick={() => {
                    window.open(`${link}`)
                }}
                disabled={!editorState.isLink}
            >
                <IoOpenOutline />
            </button>
        </div>
        <div>
            <button className="mx-1 hover:bg-neutral-800 hover:text-white hover:cursor-pointer p-1.5 rounded-xl disabled:hover:cursor-not-allowed"
                onClick={() => {
                    editor.chain().focus().unsetLink().run()
                    setEnteredLink('')
                }}
                disabled={!editorState.isLink}
            >
                <AiOutlineDelete />
            </button>
        </div>
    </div>
}