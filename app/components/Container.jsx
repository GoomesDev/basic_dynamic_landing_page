export const Container = ({backgroundColor, children}) => {

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                margin: 0,
                padding: 0,
                backgroundColor: backgroundColor,
                position: 'relative'
            }}
        >
            {children}
        </div>
    )
}