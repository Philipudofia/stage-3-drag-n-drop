import React, { useRef } from "react";
import SignIn from './components/auth/SignIn.jsx'
import AuthDetails from './components/AuthDetails.jsx';
import Home from './Pages/Home/Home.jsx';
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

function App() {
  const [signedIn, setSignedIn] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [imageItem, setImageItem] = React.useState([
    {
        "img":Images0,
        "tag":'Dice'
    },
    {
        "img":Images1,
        "tag":'Apple'
    },
    {
        "img":Images2,
        "tag":'Tree House'
    },
    {
        "img":Images3,
        "tag":'Night Tree'
    },
    {
        "img":Images4,
        "tag":'Bush'
    },
    {
        "img":Images5,
        "tag":'Wood Man'
    },
    {
        "img":Images6,
        "tag":'Holding Bulb'
    },
    {
        "img":Images7,
        "tag":'Young Boy'
    },
    {
        "img":Images8,
        "tag":'Brain Socket'
    },
    {
        "img":Images9,
        "tag":'Flower on Table'
    },
    {
        "img":Images10,
        "tag":'Sky'
    },
    {
        "img":Images11,
        "tag":'Dodge'
    }
])
React.useState(()=>{
  setImageItem( imageItem.filter((e)=> e.tag.includes(query)))
},[query])
// drag and drop
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
  return (
    <div>
      {signedIn ? <React.Fragment>
        <AuthDetails 
          setSignedIn = {e=> setSignedIn(e)}
          setQuery ={e=> setQuery(e)}
        />
        <Home 
          cards = {query ? imageItem.filter((e)=> {return e.tag.includes(query)}).map((e,index)=> {
            return <div className='cardCover'                         
            draggable 
            onDragStart={(e)=>onDragStart(e,index)}
            onDragEnter={(e)=>onDragEnter(e,index)}
            onDragEnd={(e)=>onDragEnd(e,index)}>
                <img
                key={index} 
                src={e.img} alt="" 
                />
                <p>{e.tag}</p>
            </div>
          }) :imageItem.map((item,index)=> {
            return <div className='cardCover'                         
            draggable 
            onDragStart={(e)=>onDragStart(e,index)}
            onDragEnter={(e)=>onDragEnter(e,index)}
            onDragEnd={(e)=>onDragEnd(e,index)}>
                <img
                key={index} 
                src={item.img} alt="" 
                />
                <p>{item.tag}</p>
            </div>
          }) }
        />
      </React.Fragment> : ''}
      {signedIn ? '': <SignIn
        setSignedIn = {e=> setSignedIn(e)}
      />}
    </div>
  );
}

export default App;