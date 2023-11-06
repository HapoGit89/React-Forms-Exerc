import React, { useState } from "react"
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';
import Box from './Box'
import './Boxlist.css'

function BoxList() {
    const [Boxes, setBoxes] = useState([])
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }
    const deleteBox = (id)=> {
        setBoxes(Boxes.filter(el=>el.id != id))
    }
    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            <div className="BoxOut">
            {Boxes.map((box) => { return <Box deleteBox={()=>deleteBox(box.id)} key={box.id} color={box.colour} height={box.height} width={box.width} /> })}
            </div>
        </div>
    );
}

export default BoxList
