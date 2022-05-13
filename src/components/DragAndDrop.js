import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Picture from './Picture'

const images = [
  {id: 1, url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
  {id: 2, url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60"},
  {id: 3, url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"},
]

function DragAndDrop() {

  const [board, setBoard] = useState([])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    let picture = images.filter((image) => id === image.id)
    setBoard((board) => [...board, ...picture])
    
  }

  return (
    <>
    <div className='Pictures'>
      {images.map((image) => {
        return <Picture id={image.id} url={image.url} />
      })}
    </div>
    <div className='Board' ref={drop}>
      {board.map((image) => {
        return <Picture id={image.id} url={image.url} />
      })}
    </div>

    </>
  )
}

export default DragAndDrop