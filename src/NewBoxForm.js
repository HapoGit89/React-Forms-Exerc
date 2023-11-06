
import React, {useState} from "react"
import './NewBoxForm.css'



function NewBoxForm({addBox}) {
    const [formData, setFormData]  = useState("")
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      }
    
      const handleSubmit = e => {
        e.preventDefault()
        addBox({...formData})
        setFormData("")


      }
    return (
      <div className="BoxForm">
            <form onSubmit={handleSubmit}>
                <label className="FormLabel" htmlFor="width">Width in px</label>
                <input 
                    name="width" 
                    id="width"
                    value={formData.width || ""}
                    onChange={handleChange}/>
                <label className="FormLabel" htmlFor="fullname">Height in px</label>
                <input 
                    name="height" 
                    id="height"
                    value={formData.height || ""}
                    onChange={handleChange} />
                <label className="FormLabel" htmlFor="colour">Colour</label>
                <input 
                    name="colour" 
                    id="colour"
                    value={formData.colour || ""}
                    onChange={handleChange} />
                <button>Add!</button>
</form>
      </div>
    );
  }

  export default NewBoxForm
