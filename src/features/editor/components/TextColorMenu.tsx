import { useCurrentEditor, useEditorState } from "@tiptap/react"
import { CircleAIcon } from "../ui/CircleAIcon"
import { HighlightIcon } from "../ui/HighlightIcon"

type Props = {
    addTextColor: (color: string) => void
    addHighlightColor: (color: string) => void
}

export const TextColorMenu = ({ addTextColor, addHighlightColor}: Props) => {

    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }

    const editorState = useEditorState({
        editor,

        selector: ctx => {

            return {
                isDefault: !ctx.editor.isActive('textStyle'),
                isGray: ctx.editor.isActive('textStyle', { color: '#9c9c9c' }),
                isBrown: ctx.editor.isActive('textStyle', { color: '#b9856e' }),
                isOrange: ctx.editor.isActive('textStyle', { color: '#c77d48' }),
                isYellow: ctx.editor.isActive('textStyle', { color: '#ca994e' }),
                isGreen: ctx.editor.isActive('textStyle', { color: '#519e71' }),
                isBlue: ctx.editor.isActive('textStyle', { color: '#3699d3' }),
                isPurple: ctx.editor.isActive('textStyle', { color: '#9e69d3' }),
                isPink: ctx.editor.isActive('textStyle', { color: '#d15796' }),
                isRed: ctx.editor.isActive('textStyle', { color: '#df5553' }),
                isHighlightDefault: !ctx.editor.isActive('highlight'),
                isHighlightGray: ctx.editor.isActive('highlight', { color: '#2F2F2F'}),
                isHighlightBrown: ctx.editor.isActive('highlight', { color: '#4A3228'}),
                isHighlightOrange: ctx.editor.isActive('highlight', { color: '#5C3B23'}),
                isHighlightYellow: ctx.editor.isActive('highlight', { color: '#6b6524'}),
                isHighlightGreen: ctx.editor.isActive('highlight', { color: '#509568'}),
                isHighlightBlue: ctx.editor.isActive('highlight', { color: '#6e92aa'}),
                isHighlightPurple: ctx.editor.isActive('highlight', { color: '#583e74'}),
                isHighlightPink: ctx.editor.isActive('highlight', { color: '#4E2C3C'}),
                isHighlightRed: ctx.editor.isActive('highlight', { color: '#743e42'}),
            }
        }
    })
    
    return <div className="absolute w-max bg-[rgba(14,14,17,1)] my-1 rounded-2xl border border-white/5 shadow-[0px_16px_48px_0px_rgba(0,0,0,0.5),0px_12px_24px_0px_rgba(0,0,0,0.24),0px_6px_8px_0px_rgba(0,0,0,0.22),0px_2px_3px_0px_rgba(0,0,0,0.12)] p-2">
        <div className="">
            <div className="font-medium text-xs px-2 py-2 ">
                Text Color
            </div>
            <div className="flex">
                <button onClick={() => {
                    editor.chain().focus().unsetColor().run()
                    addTextColor('#fff')
                    }
                } 
                data-testid="unsetColor" 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isDefault ? 'bg-neutral-800' : ''}`} >
                    <CircleAIcon></CircleAIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().setColor('#9c9c9c').run()
                        addTextColor('#9c9c9c')
                    }
                } 
                data-testid="setGray" 
                className={`hover:bg-neutral-700 hover:cursor-pointer p-1 rounded-xl ${editorState.isGray ? 'bg-neutral-800' : ''}`} 
                >
                    <CircleAIcon className="text-[#9c9c9c]"></CircleAIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().setColor('#b9856e').run()
                        addTextColor('#b9856e')
                    }
                } 
                data-testid="setBrown" 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isBrown ? 'bg-neutral-800' : ''}`} >
                    <CircleAIcon className="text-[#b9856e]"></CircleAIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().setColor('#c77d48').run()
                        addTextColor('#c77d48')
                    }
                } 
                data-testid="setOrange" 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isOrange ? 'bg-neutral-800' : ''}`} >
                    <CircleAIcon className="text-[#c77d48]"></CircleAIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().setColor('#ca994e').run()
                        addTextColor('#ca994e')
                    }
                } 
                data-testid="setYellow" 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isYellow ? 'bg-neutral-800' : ''}`} >
                    <CircleAIcon className="text-[#ca994e]"></CircleAIcon>
                </button>
            </div>
            <div className="flex">
                <button onClick={() => {
                        editor.chain().focus().setColor('#519e71').run()
                        addTextColor('#519e71')
                    }
                }
                data-testid="setGreen" 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isGreen ? 'bg-neutral-800' : ''}`} >
                    <CircleAIcon className="text-[#519e71]"></CircleAIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().setColor('#3699d3').run()
                        addTextColor('#3699d3')
                    }
                } 
                data-testid="setBlue" 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isBlue ? 'bg-neutral-800' : ''}`} >
                    <CircleAIcon className="text-[#3699d3]"></CircleAIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().setColor('#9e69d3').run()
                        addTextColor('#9e69d3')
                    }
                } 
                data-testid="setPurple" 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isPurple ? 'bg-neutral-800' : ''}`} >
                    <CircleAIcon className="text-[#9e69d3]"></CircleAIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().setColor('#d15796').run()
                        addTextColor('#d15796')
                    }
                } 
                data-testid="setPink" 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isPink ? 'bg-neutral-800' : ''}`} >
                    <CircleAIcon className="text-[#d15796]"></CircleAIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().setColor('#df5553').run()
                        addTextColor('#df5553')
                    }
                }
                data-testid="setRed" 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isRed ? 'bg-neutral-800' : ''}`} >
                    <CircleAIcon className="text-[#df5553]"></CircleAIcon>
                </button>
            </div>
        </div>

        <div>
            <div className="font-medium text-xs px-2 py-2">
                Highlight color
            </div>
            <div className="flex">
                <button onClick={() => {
                        editor.chain().focus().unsetHighlight().run()
                        addHighlightColor('#000')
                    }
                } 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isHighlightDefault ? 'bg-neutral-800' : ''}`}>
                    <HighlightIcon className="text-black"></HighlightIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().toggleHighlight({ color: '#2F2F2F' }).run()
                        addHighlightColor('#2F2F2F')
                    }
                } 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isHighlightGray ? 'bg-neutral-800' : ''}`}>
                    <HighlightIcon className="text-[#2F2F2F]"></HighlightIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().toggleHighlight({ color: '#4A3228' }).run()
                        addHighlightColor('#4A3228')
                    }
                } 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isHighlightBrown ? 'bg-neutral-800' : ''}`}>
                    <HighlightIcon className="text-[#4A3228]"></HighlightIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().toggleHighlight({ color: '#5C3B23' }).run()
                        addHighlightColor('#5C3B23')
                    }
                } 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isHighlightOrange ? 'bg-neutral-800' : ''}`}>
                    <HighlightIcon className="text-[#5C3B23]"></HighlightIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().toggleHighlight({ color: '#6b6524' }).run()
                        addHighlightColor('#6b6524')
                    }
                } 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isHighlightYellow ? 'bg-neutral-800' : ''}`}>
                    <HighlightIcon className="text-[#5C3B23]"></HighlightIcon>
                </button>
            </div>
            <div className="flex">
                <button onClick={() => {
                        editor.chain().focus().toggleHighlight({ color: '#509568' }).run()
                        addHighlightColor('#509568')
                    }
                } 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isHighlightGreen ? 'bg-neutral-800' : ''}`}>
                    <HighlightIcon className="text-[#509568]"></HighlightIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().toggleHighlight({ color: '#6e92aa' }).run()
                        addHighlightColor('#6e92aa')
                    }
                } 
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isHighlightBlue ? 'bg-neutral-800' : ''}`}>
                    <HighlightIcon className="text-[#6e92aa]"></HighlightIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().toggleHighlight({ color: '#583e74' }).run()
                        addHighlightColor('#583e74')
                    }
                }
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isHighlightPurple ? 'bg-neutral-800' : ''}`}>
                    <HighlightIcon className="text-[#583e74]"></HighlightIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().toggleHighlight({ color: '#4E2C3C' }).run()
                        addHighlightColor('#4E2C3C')
                    }
                }
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isHighlightPink ? 'bg-neutral-800' : ''}`}>
                    <HighlightIcon className="text-[#4E2C3C]"></HighlightIcon>
                </button>
                <button onClick={() => {
                        editor.chain().focus().toggleHighlight({ color: '#743e42' }).run()
                        addHighlightColor('#743e42')
                    }
                }
                className={`hover:bg-neutral-800 hover:cursor-pointer p-1 rounded-xl ${editorState.isHighlightRed ? 'bg-neutral-800' : ''}`}>
                    <HighlightIcon className="text-[#743e42]"></HighlightIcon>
                </button>
            </div>
        </div>
    </div>
}