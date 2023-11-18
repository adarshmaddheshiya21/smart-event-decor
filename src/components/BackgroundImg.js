import "./BackgroundImg.css"

function BackgroundImg(props) {
    return(
        <>
            <div className="welcome">
                <img src={props.img} alt="Background Img" />
            </div>
        </>
    )
}

export default BackgroundImg;