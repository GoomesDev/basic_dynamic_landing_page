export const Cellphone = ({image}) => {

    return (
        <div
            style={{
                backgroundImage: image ?? null,
                backgroundColor: '#fff',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "240px",
                height: "490px",
                zIndex: 10,
                alignSelf: 'flex-start',
                marginTop: '76px',
                display: 'flex',
                placeContent: 'center',
                placeItems: 'center',
                position: 'fixed',
                borderRadius: '40px',
                border: '3px solid',
                boxShadow: '1px 1px 1px 1px'
            }}
        >
        </div>
    )
}