import styles from './styles.module.scss'

interface ButtonProps {
    text: string,
    color?: string,
    height?: string,
    width?: string,
    Svg?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    svgSize?: number
}
/**
 * 
 * @param text Texto para botão
 * @param color cor do texto do botão
 * @param height altura do botão, em pixels
 * @param width largura do botão, em pixels
 * @param Svg icone a direita do texto
 * @param svgSize Tamanho do icone (padrão 25)
 * 
 */
export default function Button({ text, color, height, width, Svg, svgSize }: ButtonProps) {
    return (
        <div className={styles.buttonContainer}>
            <button style={{ color, height, width }}>{text} {Svg && <Svg fontSize={svgSize ?? 25} />}</button>
        </div>
    )
}