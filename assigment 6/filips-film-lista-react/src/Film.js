import React from "react"



export default function Film(props) {


    return (

        <div>      
           <li className="list-group-item">
            { props.item.title + " Betyg: " + props.item.rating }    

                <button type="delete" className="btn btn-sm btn-danger float-end" 
                onClick={() => {props.deleteItem(props.item.id)}}> X</button>
             </li>

            <button type="submit" className="btn btn-success mt-3" 
            onClick={() => {props.addItem(props.item.id)}}>Spara film</button>   
            </div>
    )
}
