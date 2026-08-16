import React, { CSSProperties, MouseEventHandler } from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
    text: string
    type?: 'submit' | 'button' | 'reset'

    fontSize?: CSSProperties['fontSize']
    fontWeight?: CSSProperties['fontWeight']
    fontFamily?: CSSProperties['fontFamily']
    textTransform?: CSSProperties['textTransform']

    color?: CSSProperties['color']
    height?: CSSProperties['height']
    width?: CSSProperties['width']
    padding?: CSSProperties['padding']
    backgroundColor?: CSSProperties['backgroundColor']

    Svg?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    svgSize?: number

    loading?: boolean
    click?: MouseEventHandler<HTMLButtonElement>

    disabled?: boolean
    ariaLabel?: string
    className?: string
}

export default function Button({
    click,
    text,
    type = 'button',
    fontSize,
    fontWeight,
    fontFamily,
    textTransform,
    color,
    height,
    width,
    Svg,
    svgSize = 20,
    backgroundColor,
    loading = false,
    padding,
    disabled = false,
    ariaLabel,
    className,
}: ButtonProps) {
    const isDisabled = disabled || loading

    const buttonStyle: CSSProperties = {
        color,
        fontSize,
        fontWeight,
        fontFamily,
        textTransform,
        height,
        width,
        padding,
        backgroundColor,
        background: backgroundColor ? undefined : 'var(--yellow-gradient)',
    }

    return (
        <button
            className={`${styles.button} ${className ?? ''}`}
            onClick={click}
            type={type}
            style={buttonStyle}
            disabled={isDisabled}
            aria-label={ariaLabel}
            aria-busy={loading}
        >
            {loading ? (
                <>
                    <span className={styles.spinner} />
                    <span>Aguarde...</span>
                </>
            ) : (
                <>
                    <span>{text}</span>

                    {Svg && <Svg width={svgSize} height={svgSize} aria-hidden="true" focusable="false" />}
                </>
            )}
        </button>
    )
}

/*import { MouseEventHandler } from 'react'
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
    padding?: string

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
 * @param padding (optional) custom padding
 * 
 */ /*
export default function Button({ click, text, type = 'button', fontSize, fontWeight, fontFamily, textTransform, color, height, width, Svg, svgSize, backgroundColor, loading = false, padding }: ButtonProps) {
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
                    cursor: `${loading ? 'progress' : 'pointer'}`,
                    padding
                }}
            >{loading ? 'Aguarde...' : text} {Svg && <Svg fontSize={svgSize ?? 25} />}</button>
        </div>
    )
}*/
