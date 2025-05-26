import styles from './styles.module.scss'
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import { useState } from 'react';
import Link from '@tiptap/extension-link';
import BulletList from '@tiptap/extension-bullet-list';
import Image from '@tiptap/extension-image';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import { debug } from '@/utils/DebugLogger';
import Underline from '@tiptap/extension-underline'
import { FaLink } from 'react-icons/fa6';

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) return null
    const [heading, setHeading] = useState(0)

    const headingOptions = [
        {
            level: 0,
            heading: 'Normal'
        },
        {
            level: 1,
            heading: 'Título 1'
        },
        {
            level: 2,
            heading: 'Título 2'
        },
        {
            level: 3,
            heading: 'Título 3'
        },
        {
            level: 4,
            heading: 'Título 4'
        },
        {
            level: 5,
            heading: 'Título 5'
        },
        {
            level: 6,
            heading: 'Título 6'
        },
    ]

    const addImage = () => {
        const url = window.prompt('URL da imagem')
        if (url) editor.chain().focus().setImage({ src: url }).run()
    }
    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('Digite o link', previousUrl)
        const selection = editor.state.selection
        const isEmpty = selection.empty
        if (url === null) return

        if (url === '') return editor.chain().focus().extendMarkRange('link').unsetLink({ href: url }).run()
        if (!isEmpty) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        } else alert(`Selecione um texto para aplicar o link`)
    }
    const handleSelect = (level: number) => {
        if (level > 0) editor.chain().focus().toggleHeading({ level }).run()
        else if (level === 0) editor.chain().focus().setParagraph().run()

    }

    return (
        <div className={styles.menu}>
            <button onClick={() => editor.chain().focus().toggleBold().run()} className={styles.button}>Bold</button>
            <button onClick={() => editor.chain().focus().toggleItalic().run()} className={styles.button}>Italic</button>
            <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={styles.button}>Underline</button>


            <select
                value={heading}
                onChange={(e) => {
                    const value = Number(e.target.value)
                    setHeading(value)
                    handleSelect(value)
                }}
                className={styles.select}
            >
                {headingOptions.map(heading =>
                    <option key={heading.level} value={heading.level}>{heading.heading}</option>
                )}
            </select>

            <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={styles.button}>Lista</button>
            <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={styles.button}>Numerada</button>

            <button onClick={setLink} className={styles.button}><FaLink /></button>

            <input
                placeholder='Escreva aqui!'
                type="color"
                onInput={(e) =>
                    editor.chain().focus().setColor((e.target as HTMLInputElement).value).run()
                }
            />
        </div>
    )
}

export default function Editor() {
    const [htmlOutput, setHtmlOutput] = useState('')

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({}),
            Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
            TextStyle,
            Color,
            Link.configure({ openOnClick: true }),
            Image,
            BulletList,
            OrderedList,
            ListItem,
            Underline
        ],
        //content: 'Escreva aqui!',

    })

    const exportHTML = () => {
        if (!editor) return
        const html = editor.getHTML()
        setHtmlOutput(html)
        debug.log('conteudo html exportado', html)
    }


    return (
        <div className={styles.container}>
            <MenuBar editor={editor} />
            <EditorContent className={styles.editor} editor={editor} />
            <button className={styles.button} style={{ marginTop: '1rem' }} onClick={exportHTML}>Exportar HTML</button>

            {htmlOutput &&
                <div>
                    <h2 style={{ marginTop: '2rem' }}>HTML exportado</h2>
                    <pre className={styles.htmlOutput}>{htmlOutput}</pre>
                </div>
            }
        </div>
    )
}