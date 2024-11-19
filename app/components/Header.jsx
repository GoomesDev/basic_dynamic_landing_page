import { Cellphone } from "./Cellphone"

export const Header = ({backgroundColor, textColor, text}) => {

    return (
        <div
            style={{
                width: '100%',
                height: '50%',
                margin: 0,
                padding: 0,
                backgroundColor: backgroundColor,
                display: 'flex',
                placeContent: 'center',
                placeItems: 'center',
                position: 'relative',
                zIndex: 0
            }}
        >
            <span
                style={{
                    color: textColor,
                    maxWidth: '34%',
                    fontSize: '26px',
                    position: 'absolute',
                    left: '46px',
                    bottom: '46px',
                    fontWeight: '900',
                }}
            >
                {text ?? 'Exemplo de texto'}
            </span>
            <Cellphone image={null}/>
        </div>
    )
}