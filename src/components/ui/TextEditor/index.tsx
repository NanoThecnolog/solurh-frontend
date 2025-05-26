import { useRef, useState } from 'react';
import styles from './styles.module.scss'
import { FaLink } from 'react-icons/fa6';
export default function Editor() {
    const [fontSize, setFontSize] = useState(3)
    const [fontFamily, setFontFamily] = useState('arial')
    const editorRef = useRef<HTMLDivElement>(null)

    const exec = (cmd: string, value?: string) => {
        document.execCommand(cmd, false, value)
    }
    const insertLink = () => {
        const url = prompt('Digite a URL:')
        if (url) exec('createLink', url)
    }
    const changeFontSize = (n: number) => {
        let newSize = fontSize + n;
        if (newSize < 1) newSize = 1;
        if (newSize > 7) newSize = 7;
        setFontSize(newSize);
        exec('fontSize', newSize.toString());
    };
    const changeFontFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newFont = e.target.value;
        setFontFamily(newFont);
        exec('fontName', newFont);
    };

    const fonts = [
        'Arial', 'Courier New', 'Georgia', 'Tahoma', 'Times New Roman', 'Verdana'
    ]

    const bold = () => {
        const selection = window.getSelection()
        if (!selection || selection.rangeCount === 0) return
        const range = selection.getRangeAt(0)
        const bold = document.createElement('strong')
        bold.appendChild(range.extractContents())
        range.insertNode(bold)

        range.setStartAfter(bold)
        range.collapse(true)
        selection.removeAllRanges()
        selection.addRange(range)
    }




    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <select>

                </select>
                <div className={styles.btn} onClick={bold}>B</div>
                <div className={styles.btn} onClick={() => exec('italic')}>I</div>
                <div className={styles.btn} onClick={() => exec('underline')}>S</div>
                <div className={styles.btn}>
                    <button onClick={() => changeFontSize(-1)}>-</button>
                    {fontSize}
                    <button onClick={() => changeFontSize(1)}>+</button>
                </div>
                <select
                    className={styles.btn}
                    value={fontFamily}
                    onChange={changeFontFamily}
                >
                    {fonts.map((f, index) =>
                        <option key={index} value={f}>{f}</option>
                    )}
                </select>
                <div className={styles.btn} onClick={insertLink}><FaLink /></div>
            </div>
            <div
                contentEditable
                suppressContentEditableWarning
            >escrever essa porra..</div>
        </div>
    );
}
