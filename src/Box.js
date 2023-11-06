import React from "react"
import './Box.css'

function Box({color, width, height, deleteBox}) {
    console.log(color, width, height)
    return (
        <div>
           <div className="Box" style={{ backgroundColor: `${color}`, height: `${height}px`, width: `${width}px` }}>
           </div>
           <button className="deleteButton" onClick={deleteBox}>X</button>
        </div>
    );
  }

  export default Box
