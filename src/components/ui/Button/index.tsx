import { MouseEventHandler } from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
    text: string,
    type?: undefined | 'submit' | 'button' | 'reset',
    fontSize?: string,
    fontWeight?: string,
    fontFamily?: string,
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana',
    color?: string,
    height?: string,
    width?: string,
    Svg?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    svgSize?: number
    backgroundColor?: string
    loading?: boolean
    click?: MouseEventHandler<HTMLButtonElement>

}
/**
 * 
 * @param text button Text
 * @param fontSize (Optional) font size
 * @param fontWeight (Optional) font weight
 * @param fontFamily (Optional) font family
 * @param textTransform (Optional) text transforming (none | capitalize | uppercase | lowercase | full-width | full-size-kana)
 * @param color (Optional) text color
 * @param height (Optional) height in pixels
 * @param width (Optional) width in pixels
 * @param Svg (Optional) text icon
 * @param svgSize (Optional) icon size (default 25)
 * @param backgroundColor (Optional) custom background color
 * @param loading (Optional) boolean
 * @param click (optional) send function to onClick
 * 
 */
export default function Button({ click, text, type = 'button', fontSize, fontWeight, fontFamily, textTransform, color, height, width, Svg, svgSize, backgroundColor, loading = false }: ButtonProps) {
    return (
        <div className={styles.buttonContainer}>
            <button
                onClick={click}
                type={type}
                style={{
                    color,
                    fontSize,
                    fontWeight,
                    fontFamily,
                    textTransform,
                    height,
                    width,
                    background: `${!backgroundColor ? 'var(--yellow-gradient)' : ''}`,
                    backgroundColor,
                    cursor: `${loading ? 'progress' : 'pointer'}`
                }}
            >{loading ? 'Aguarde...' : text} {Svg && <Svg fontSize={svgSize ?? 25} />}</button>
        </div>
    )
}