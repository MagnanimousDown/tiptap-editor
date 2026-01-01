// import { useCallback } from "react"
// import { useEditorState } from "@tiptap/react"

// export const Toolbar = () => {

//   // if (!editor) {
//   //   return null
//   // }

//   const editorState = useEditorState({
//     editor,
//     selector: ctx => {
//       return {
//       color: ctx.editor.getAttributes('textStyle').color,
//       isPurple: ctx.editor.isActive('textStyle', { color: '#958DF1' }),
//       isRed: ctx.editor.isActive('textStyle', { color: '#F98181' }),
//       isOrange: ctx.editor.isActive('textStyle', { color: '#FBBC88' }),
//       isYellow: ctx.editor.isActive('textStyle', { color: '#FAF594' }),
//       isBlue: ctx.editor.isActive('textStyle', { color: '#70CFF8' }),
//       isTeal: ctx.editor.isActive('textStyle', { color: '#94FADB' }),
//       isGreen: ctx.editor.isActive('textStyle', { color: '#B9F18D' }),
//       }
//     },
//   })

//   const setLink = useCallback(() => {
//     const previousUrl = editor.getAttributes('link').href
//     console.log(`previousUrl is ${previousUrl}`);
//     const url = window.prompt('URL', previousUrl)
//     console.log(`url is ${url}`);
    
//     // cancelled
//     if (url === null) {
//       return
//     }

//     // empty
//     if (url === '') {
//       editor.chain().focus().extendMarkRange('link').unsetLink({ href: url}).run()
//       return
//     }

//     // update link
//     try {
//       editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
//     } catch (e: any) {
//       alert(e.message)
//     }

//   }, [editor])

//   return <div className="">
//     <button onClick={() => editor.chain().focus().toggleBold().run()} className={` ${editor.isActive('bold') ? '' : ''}`}>
//       Bold
//     </button>
//     <button onClick={() => editor.chain().focus().toggleItalic().run()}
//       className={editor.isActive('italic') ? 'is-active' : ''}>
//       Italic
//     </button>
//     <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? '' : ''}>
//       Underline
//     </button>
//     <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? '' : ''}>
//       Strike
//     </button>
//     <button onClick={() => editor.chain().focus().toggleCode().run()} className={editor.isActive('code') ? '' : ''}>
//       Code
//     </button>

//     <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
//       link
//     </button>

//     <button onClick={() => editor.chain().focus().toggleSuperscript().run()} className={editor.isActive('superscript') ? 'is-active' : ''}>
//       superscript
//     </button>
//     <button onClick={() => editor.chain().focus().toggleSubscript().run()} className={editor.isActive('subscript') ? 'is-active' : ''}>
//       subscript
//     </button>

//     <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
//       Left align
//     </button>
//     <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
//       Center align
//     </button>
//     <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
//       Right align
//     </button>
//     <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
//       Justify align
//     </button>

    // <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'is-active' : ''}>
    //   Toggle highlight
    // </button>
    // <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run()} className={editor.isActive('highlight', { color: '#ffc078' }) ? 'is-active' : ''}>
    //   Orange
    // </button>
    // <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#8ce99a' }).run()} className={editor.isActive('highlight', { color: '#8ce99a' }) ? 'is-active' : ''}>
    //   Green
    // </button>
    // <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#74c0fc' }).run()} className={editor.isActive('highlight', { color: '#74c0fc' }) ? 'is-active' : ''}>
    //   Blue
    // </button>
    // <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#b197fc' }).run()} className={editor.isActive('highlight', { color: '#b197fc' }) ? 'is-active' : ''}>
    //   Purple
    // </button>
    // <button onClick={() => editor.chain().focus().toggleHighlight({ color: 'red' }).run()} className={editor.isActive('highlight', { color: 'red' }) ? 'is-active' : ''}>
    //   Red ('red')
    // </button>
    // <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#ffa8a8' }).run()} className={editor.isActive('highlight', { color: '#ffa8a8' }) ? 'is-active' : ''}>
    //   Red (#ffa8a8)
    // </button>

//     <input type="color" onInput={event => editor.chain().focus().setColor(event.currentTarget.value).run()} value={editorState.color} data-testid="setColor"/>
    
//     <button onClick={() => editor.chain().focus().setColor('#958DF1').run()} className={editorState.isPurple ? 'is-active' : ''} data-testid="setPurple">
//       Purple
//     </button>
//     <button onClick={() => editor.chain().focus().setColor('#F98181').run()} className={editorState.isRed ? 'is-active' : ''} data-testid="setRed">
//       Red
//     </button>
//     <button onClick={() => editor.chain().focus().setColor('#FBBC88').run()} className={editorState.isOrange ? 'is-active' : ''} data-testid="setOrange">
//       Orange
//     </button>
//     <button onClick={() => editor.chain().focus().setColor('#FAF594').run()} className={editorState.isYellow ? 'is-active' : ''} data-testid="setYellow">
//       Yellow
//     </button>
//     <button onClick={() => editor.chain().focus().setColor('#70CFF8').run()} className={editorState.isBlue ? 'is-active' : ''} data-testid="setBlue">
//       Blue
//     </button>
//     <button onClick={() => editor.chain().focus().setColor('#94FADB').run()} className={editorState.isTeal ? 'is-active' : ''} data-testid="setTeal">
//       Teal
//     </button>
//     <button onClick={() => editor.chain().focus().setColor('#B9F18D').run()} className={editorState.isGreen ? 'is-active' : ''} data-testid="setGreen">
//       Green
//     </button>
//     <button onClick={() => editor.chain().focus().unsetColor().run()} data-testid="unsetColor">
//       Unset color
//     </button>

//     <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
//       H1
//     </button>
//     <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
//       H2
//     </button>
//     <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
//       H3
//     </button>

//     <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''}>
//       Toggle bullet list
//     </button>
//     <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''}>
//       Toggle ordered list
//     </button>

//     <button onClick={() => editor.chain().focus().toggleTaskList().run()} className={editor.isActive('taskList') ? 'is-active' : ''}>
//       Toggle task list
//     </button>

//     <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? 'is-active' : ''}>
//       Toggle code block
//     </button>

//     <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'is-active' : ''}>
//       Toggle blockquote
//     </button>

    
//   </div>
// }