import { Editor, useCurrentEditor, useEditorState } from "@tiptap/react"
import React from "react";

type ToolbarButtonType = "bold" | "italic" | "underline" | "strike" | "code" | "textAlign-left" | "textAlign-center" | "textAlign-right" | "textAlign-justify" | "superscript" | "subscript"

type ToolbarButtonProps = {
    button: ToolbarButtonType;
    icon: React.ReactElement<React.SVGProps<SVGSVGElement>>,
    onMenuItemSelect?: () => void
};

export const ToolbarButton = ({ button, icon, onMenuItemSelect }: ToolbarButtonProps) => {

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
                isCode: editor.isActive('code'),
                isTextAlignLeft: editor.isActive({ textAlign: 'left' }),
                isTextAlignCenter: editor.isActive({ textAlign: 'center' }),
                isTextAlignRight: editor.isActive({ textAlign: 'right' }),
                isTextAlignJustify: editor.isActive({ textAlign: 'justify' }),
                isSuperscript: editor.isActive('superscript'),
                isSubscript: editor.isActive('subscript')
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
        } else if (button === 'textAlign-left') {
            return editor.chain().focus().setTextAlign('left').run()
        } else if (button === 'textAlign-center') {
            return editor.chain().focus().setTextAlign('center').run()
        } else if (button === 'textAlign-right') {
            return editor.chain().focus().setTextAlign('right').run()
        } else if (button === 'textAlign-justify') {
            return editor.chain().focus().setTextAlign('justify').run()
        } else if (button === 'superscript') {
            return editor.chain().focus().toggleSuperscript().run()
        } else if (button === 'subscript') {
            return editor.chain().focus().toggleSubscript().run()
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
        } else if (button === 'textAlign-left') {
            return ` ${editorState.isTextAlignLeft ? 'text-violet-500' : ''}`
        } else if (button === 'textAlign-center') {
            return ` ${editorState.isTextAlignCenter ? 'text-violet-500' : ''}`
        } else if (button === 'textAlign-right') {
            return ` ${editorState.isTextAlignRight ? 'text-violet-500' : ''}`
        } else if (button === 'textAlign-justify') {
            return ` ${editorState.isTextAlignJustify ? 'text-violet-500' : ''}`
        } else if (button === 'superscript') {
            return ` ${editorState.isSuperscript ? 'text-violet-500' : ''}`
        } else if (button === 'subscript') {
            return ` ${editorState.isSubscript ? 'text-violet-500' : ''}`
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
        } else if (button === 'textAlign-left') {
            return ` ${editorState.isTextAlignLeft ? 'bg-neutral-700' : 'text-neutral-300'}`
        } else if (button === 'textAlign-center') {
            return ` ${editorState.isTextAlignCenter ? 'bg-neutral-700' : 'text-neutral-300'}`
        } else if (button === 'textAlign-right') {
            return ` ${editorState.isTextAlignRight ? 'bg-neutral-700' : 'text-neutral-300'}`
        } else if (button === 'textAlign-justify') {
            return ` ${editorState.isTextAlignJustify ? 'bg-neutral-700' : 'text-neutral-300'}`
        } else if (button === 'superscript') {
            return ` ${editorState.isSuperscript ? 'bg-neutral-700' : 'text-neutral-300'}`
        } else if (button === 'subscript') {
            return ` ${editorState.isSubscript ? 'bg-neutral-700' : 'text-neutral-300'}`
        }
    }

    return <div className="">
        <button onClick={() => {
            setOnClick(editor, button)
            onMenuItemSelect?.()
        }} 
        className={`hover:bg-neutral-600 hover:text-white hover:cursor-pointer p-1.5 rounded-xl ${setTailwindcssForButton(button)}`}>
            {iconWithClass}
        </button>
    </div>
}
