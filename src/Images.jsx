import react from "react";


function Images(props) {
    return (
        <a href={props.linkData}>
            <img src={props.imgData} alt={props.altData} />
        </a>
    );
}

export default Images;