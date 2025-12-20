import { useEditor, EditorContent } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import { Toolbar } from './Toolbar'
import Link from '@tiptap/extension-link'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { TextStyle, Color } from '@tiptap/extension-text-style'
import Heading from '@tiptap/extension-heading'
import Text from '@tiptap/extension-text'
import { BulletList, ListItem, OrderedList, TaskItem, TaskList } from '@tiptap/extension-list'
import CodeBlock from '@tiptap/extension-code-block'
import Blockquote from '@tiptap/extension-blockquote'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: false,
        heading: false,
      }),
      Link.configure({
        openOnClick: false
      }),
      Superscript,
      Subscript,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({
        multicolor: true
      }),
      // Highlight.extend({
      //    priority: 1000 
      // }),
      TextStyle,
      Color,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Text,
      BulletList,
      OrderedList,
      ListItem,
      TaskList,
      TaskItem.configure({
        nested: true
      }),
      CodeBlock,
      Blockquote,
    ], // define your extension array

    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
        
        // class: 'prose prose-sm sm:prose-base lg:prose-headings:h2 xl:prose-headings:h3 m-5 focus:outline-none',
      },
    },

    content: '<p>Hello World! There is an issue with task Item (Todo-list)</p>', // initial content
  })

  return (
    <div className=''>
        <Toolbar editor={editor} ></Toolbar>
        <div>
            <EditorContent editor={editor} />
        </div>
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </div>
  )
}

export default Tiptap