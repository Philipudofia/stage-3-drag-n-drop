import React, { useRef } from 'react';
import './Home.css';
import ClipLoader from "react-spinners/ClipLoader";
import Images0 from './Images/1.jpg'
import Images1 from './Images/2.jpg'
import Images2 from './Images/3.jpg'
import Images3 from './Images/4.jpg'
import Images4 from './Images/5.jpg'
import Images5 from './Images/6.jpg'
import Images6 from './Images/7.jpg'
import Images7 from './Images/8.jpg'
import Images8 from './Images/9.jpg'
import Images9 from './Images/10.jpg'
import Images10 from './Images/11.jpg'
import Images11 from './Images/12.jpg'

export default function Home() {
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
    const [imageItem, setImageItem] = React.useState([Images0,Images1,Images2,Images3,Images4,Images5,Images6,Images7,Images8,Images9,Images10,Images11])
    let todoItemDrag = useRef()
    let todoItemDragOver = useRef()
    
    function onDragStart(e,index){
        todoItemDrag.current = index
    }  
    function onDragEnter(e,index){
        todoItemDragOver.current = index
    }  
    function onDragEnd(e, index){
        const arr1 = [...imageItem]
        const itemMain = arr1[todoItemDrag.current]
        arr1.splice(todoItemDrag.current, 1)
        arr1.splice(todoItemDragOver.current, 0, itemMain)

        todoItemDrag.current= null;
        todoItemDragOver.current = null;
        setImageItem(arr1)
    }  

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
                        {imageItem.map((item,index)=> {
                            return <img
                            loading='lazy'
                             key={index} 
                             src={item} alt="" 
                             draggable 
                             onDragStart={(e)=>onDragStart(e,index)}
                             onDragEnter={(e)=>onDragEnter(e,index)}
                             onDragEnd={(e)=>onDragEnd(e,index)}
                              />
                        })}
                    </div>
                </div>
            </div>}
        </div>
      )
}