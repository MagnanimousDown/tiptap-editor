import { useState } from "react"
import { useCurrentEditor, useEditorState } from "@tiptap/react"
import { LuListTodo } from "react-icons/lu";
import { PiCodeBlock } from "react-icons/pi";

type BlockTypeState = {
  isH1: boolean
  isH2: boolean
  isH3: boolean
  isBulletList: boolean
  isNumberedList: boolean
  isTodoList: boolean
  isBlockquote: boolean
  isCodeblock: boolean
}

export const BlockTypeDropdown = () => {
    const [open, setOpen] = useState(false)
    const { editor } = useCurrentEditor()

    if (!editor) {
        return null;
    }

    const editorState = useEditorState<BlockTypeState>({
        editor,

        // the selector function is used to select the state you want to react to
        selector: ({ editor }) => {
            // if (!editor) return null;
        
            return {
                isH1: editor.isActive('heading', { level: 1 }),
                isH2: editor.isActive('heading', { level: 2 }),
                isH3: editor.isActive('heading', { level: 3 }),
                isBulletList: editor.isActive('bulletList'),
                isNumberedList: editor.isActive('orderedList'),
                isTodoList: editor.isActive('taskList'),
                isBlockquote: editor.isActive('blockquote'),
                isCodeblock: editor.isActive('codeBlock')
            };

        },
    });

    if (!editorState) {
        return null;
        
    }

    return <div className="flex items-center relative ">
        <div className="hover:bg-neutral-700 rounded-2xl">
            <button onClick={() => {
                setOpen(open => !open)
            }}
            className="flex items-center ">
                <span className="mx-1">{getCurrentBlockLabel({editorState})}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2 mx-1  ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>

        {open && (
            <div className="absolute top-full mt-2 py-1 bg-neutral-900 rounded-2xl w-38 border-0 ">
                <div className="pt-3 pl-4 font-sans font-medium text-xs text-gray-200">
                    Turn Into
                </div>
                <div className="flex flex-col px-2">
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} 
                    className={`flex items-center p-1 m-0.5 hover:text-white rounded-xl hover:bg-neutral-700 font-medium text-sm  ${editorState.isH1 ? 'bg-neutral-800' : 'text-neutral-300'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`size-4 pl-1 ${editorState.isH1 ? 'text-violet-500' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501m4.501-8.627 2.25-1.5v10.126m0 0h-2.25m2.25 0h2.25" />
                        </svg>
                        <span className="ml-2">Heading 1</span>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
                    className={`flex items-center p-1 m-0.5 hover:text-white rounded-xl hover:bg-neutral-700 font-medium text-sm ${editorState.isH2 ? 'bg-neutral-800' : 'text-neutral-300'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`size-4 pl-1 ${editorState.isH2 ? 'text-violet-500' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 19.5H16.5v-1.609a2.25 2.25 0 0 1 1.244-2.012l2.89-1.445c.651-.326 1.116-.955 1.116-1.683 0-.498-.04-.987-.118-1.463-.135-.825-.835-1.422-1.668-1.489a15.202 15.202 0 0 0-3.464.12M2.243 4.492v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
                        </svg>
                        <span className="ml-2">Heading 2</span>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} 
                    className={`flex items-center p-1 m-0.5 hover:text-white rounded-xl hover:bg-neutral-700 font-medium text-sm  ${editorState.isH3 ? 'bg-neutral-800' : 'text-neutral-300'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`size-4 pl-1 ${editorState.isH3 ? 'text-violet-500' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.905 14.626a4.52 4.52 0 0 1 .738 3.603c-.154.695-.794 1.143-1.504 1.208a15.194 15.194 0 0 1-3.639-.104m4.405-4.707a4.52 4.52 0 0 0 .738-3.603c-.154-.696-.794-1.144-1.504-1.209a15.19 15.19 0 0 0-3.639.104m4.405 4.708H18M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
                        </svg>
                        <span className="ml-2">Heading 3</span>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleBulletList().run()} 
                    className={`flex items-center p-1 m-0.5 hover:text-white rounded-xl hover:bg-neutral-700 font-medium text-sm  ${editorState.isBulletList ? 'bg-neutral-800' : 'text-neutral-300'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`size-4 pl-1 ${editorState.isBulletList ? 'text-violet-500' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <span className="ml-2">Bulleted list</span>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleOrderedList().run()} 
                    className={`flex items-center p-1 m-0.5 hover:text-white rounded-xl hover:bg-neutral-700 font-medium text-sm ${editorState.isNumberedList ? 'bg-neutral-800' : 'text-neutral-300'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`size-4 pl-1 ${editorState.isNumberedList ? 'text-violet-500' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
                        </svg>
                        <span className="ml-2">Numbered list</span>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleTaskList().run()} 
                    className={`flex items-center p-1 m-0.5 hover:text-white rounded-xl hover:bg-neutral-700 font-medium text-sm ${editorState.isTodoList ? 'bg-neutral-800' : 'text-neutral-300'}`}>
                        <LuListTodo strokeWidth={3} className={`size-4 pl-1 ${editorState.isTodoList ? 'text-violet-500' : ''}`} />
                        <span className="ml-2">To-do list</span>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleBlockquote().run()} 
                    className={`flex items-center p-1 m-0.5 hover:text-white rounded-xl hover:bg-neutral-700 font-medium text-sm ${editorState.isBlockquote ? 'bg-neutral-800' : 'text-neutral-300'}`}>
                        <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"
                        className={`size-4 pl-1 ${editorState.isBlockquote ? 'fill-violet-500' : ''}`}>{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 7H21V9H3z"></path><path d="M3 3H21V5H3z"></path><path d="M7 11H21V13H7z"></path><path d="M3 11H5V21H3z"></path><path d="M7 15H21V17H7z"></path><path d="M7 19H21V21H7z"></path></svg>
                        <span className="ml-2">Blockquote</span>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} 
                    className={`flex items-center p-1 m-0.5 hover:text-white rounded-xl hover:bg-neutral-700 font-medium text-sm ${editorState.isCodeblock ? 'bg-neutral-800' : 'text-neutral-300'}`}>
                        <PiCodeBlock strokeWidth={5} className={`size-4 pl-1 ${editorState.isCodeblock ? 'text-violet-500' : ''}`}/>
                        <span className="ml-2">Code block</span>
                    </button>
                </div>
            </div>
        )}
    </div>
}

function getCurrentBlockLabel({editorState}: {editorState: BlockTypeState}) {
    if (editorState.isH1) return 'Heading 1'
    if (editorState.isH2) return 'Heading 2'
    if (editorState.isH3) return 'Heading 3'
    if (editorState.isBulletList) return 'Bulleted list'
    if (editorState.isNumberedList) return 'Numbered list'
    if (editorState.isTodoList) return 'To-do list'
    if (editorState.isBlockquote) return 'Blockquote'
    if (editorState.isCodeblock) return 'Code block'

    return 'Text'
}