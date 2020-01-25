import React from "react";
const CatInputs = (props) => {
  return (
    props.cats.map((val, idx)=> {
      let catId = `cat-${idx}`
      return (
        <div key={idx} style={{padding:"0.5em"}}>
          <label htmlFor={catId}>{`Symptom ${idx + 1} :`}</label>
          <input 
            type="text"
            name={catId}
            data-id={idx}
            id={catId}
            value={props.cats[idx].name}  // TODO:Input to be run. 
            className="pa2 input-reset ba bg-transparent"
            style={{backgroundColor:"#FFDCA2",borderRadius:"30px",justifyContent:"center"}}
          />
          
        </div>
      )
    })
  )
}
export default CatInputs;