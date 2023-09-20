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
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function App() {
  const [signedIn, setSignedIn] = React.useState(false)
  const [query, setQuery] = React.useState()
  const [imageItem, setImageItem] = React.useState([
    {
        "id":0,
        "img":Images0,
        "tag":'Dice'
    },
    {
        "id":1,
        "img":Images1,
        "tag":'Apple'
    },
    {
        "id":2,
        "img":Images2,
        "tag":'Tree House'
    },
    {
        "id":3,
        "img":Images3,
        "tag":'Night Tree'
    },
    {
        "id":4,
        "img":Images4,
        "tag":'Bush'
    },
    {
        "id":5,
        "img":Images5,
        "tag":'Wood Man'
    },
    {
        "id":6,
        "img":Images6,
        "tag":'Holding Bulb'
    },
    {
        "id":7,
        "img":Images7,
        "tag":'Young Boy'
    },
    {
        "id":8,
        "img":Images8,
        "tag":'Brain Socket'
    },
    {
        "id":9,
        "img":Images9,
        "tag":'Flower on Table'
    },
    {
        "id":10,
        "img":Images10,
        "tag":'Sky'
    },
    {
        "id":11,
        "img":Images11,
        "tag":'Dodge'
    }
])
const SortableUser = ({ item }) =>{
  const {attributes,listeners,setNodeRef,transform,transition} = useSortable({ id: item.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }
  return(
    <div ref={setNodeRef} style={style} {...attributes}{...listeners} className='cardCover'>
        <img
          src={item.img} alt="" 
        />
        <p>{item.tag}</p>
    </div>
  )
}
const onDragEnd = (e) =>{
    const { active,over } = e;
    if (active.id === over.id) {
      return
    }
    setImageItem((items) => {
      const oldIndex = items.findIndex((user) => user.id === active.id)
      const newIndex = items.findIndex((user) => user.id === over.id)
      return arrayMove(items, oldIndex, newIndex)
    })
  }
  return (
    <div>
      {signedIn ? <React.Fragment>
        <AuthDetails 
          setSignedIn = {e=> setSignedIn(e)}
          setQuery ={e=> setQuery(e)}
        />
        <Home 
          cards = {
              <>
                {query?<DndContext
                      collisionDetection={closestCenter}
                      onDragEnd={onDragEnd}>
                      <SortableContext items={imageItem} >
                          {imageItem.filter((e) =>{
                            return e.tag.toLowerCase().includes(query)
                          }).map((item, index) =>{
                            return <SortableUser key={index} item={item} />
                          })}
                      </SortableContext>
                    </DndContext> :<DndContext
                      collisionDetection={closestCenter}
                      onDragEnd={onDragEnd}>
                      <SortableContext items={imageItem} >
                          {imageItem.map((item, index) =>{
                            return <SortableUser key={index} item={item} />
                          })}
                      </SortableContext>
                    </DndContext>}
              </>
              }
        />
      </React.Fragment> : ''}
      {signedIn ? '': <SignIn
        setSignedIn = {e=> setSignedIn(e)}
      />}
    </div>
  );
}

export default App;