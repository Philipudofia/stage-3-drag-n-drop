import React, { useRef } from 'react';
import './Home.css';
import ClipLoader from "react-spinners/ClipLoader";

export default function Home(props) {
    const [loading, setLoading] = React.useState(true)
    React.useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },5000)
    },[])
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
      let color= "rgb(176, 205, 10)";

    return(
        <div>
            {loading?<ClipLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />:<div className="gallery">
                <div className="galleryContainer">
                    <div className="cards">
                        {props.cards}
                    </div>
                </div>
            </div>}
        </div>
      )
}