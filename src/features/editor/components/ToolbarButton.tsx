import { Editor, useCurrentEditor, useEditorState } from "@tiptap/react"
import React from "react";

type ToolbarButtonType = "bold" | "italic" | "underline" | "strike" | "code"

export const ToolbarButton = ({ button, icon }: { button: ToolbarButtonType, icon: React.ReactElement<React.SVGProps<SVGSVGElement>> }) => {

    const { editor } = useCurrentEditor()

    if (!editor) {
        return null;
    }

    const editorState = useEditorState({
        editor,

        selector: ({ editor }) => {

            return {
                isBold: editor.isActive('bold'),
                isItalic: editor.isActive('italic'),
                isUnderline: editor.isActive('underline'),
                isStrike: editor.isActive('strike'),
                isCode: editor.isActive('code')
            }
        }
    })

    if (!editorState) {
        return null;
    }
    
    function setOnClick(editor: Editor, button: string) {
        if (button === 'bold') {
            return editor.chain().focus().toggleBold().run()
        } else if (button === 'italic') {
            return editor.chain().focus().toggleItalic().run()
        } else if (button === 'underline') {
            return editor.chain().focus().toggleUnderline().run()
        } else if (button === 'strike') {
            return editor.chain().focus().toggleStrike().run()
        } else if (button === 'code') {
            return editor.chain().focus().toggleCode().run()
        }
    }
    
    const iconWithClass = React.cloneElement(icon, {
        className: `size-4 ${setTailwindcssForIcon(button)}`
    })

    function setTailwindcssForIcon(button: ToolbarButtonType){
        if (button === 'bold') {
            return ` ${editorState.isBold ? 'text-violet-500' : ''}`
        } else if (button === 'italic') {
            return ` ${editorState.isItalic ? 'text-violet-500' : ''}`
        } else if (button === 'underline') {
            return ` ${editorState.isUnderline ? 'text-violet-500' : ''}`
        } else if (button === 'strike') {
            return ` ${editorState.isStrike ? 'text-violet-500' : ''}`
        } else if (button === 'code') {
            return ` ${editorState.isCode ? 'text-violet-500' : ''}`
        }
        
    }

    function setTailwindcssForButton(button: ToolbarButtonType){
        if (button === 'bold') {
            return ` ${editorState.isBold ? 'bg-neutral-700' : 'text-neutral-300'}`
        } else if (button === 'italic') {
            return ` ${editorState.isItalic ? 'bg-neutral-700' : 'text-neutral-300'}`
        } else if (button === 'underline') {
            return ` ${editorState.isUnderline ? 'bg-neutral-700' : 'text-neutral-300'}`
        } else if (button === 'strike') {
            return ` ${editorState.isStrike ? 'bg-neutral-700' : 'text-neutral-300'}`
        } else if (button === 'code') {
            return ` ${editorState.isCode ? 'bg-neutral-700' : 'text-neutral-300'}`
        }
    }

    return <div className="">
        <button onClick={() => {
            setOnClick(editor, button)
        }} 
        className={` hover:bg-neutral-600 hover:text-white p-1.5 rounded-xl ${setTailwindcssForButton(button)}`}>
            {iconWithClass}
        </button>
    </div>
}
