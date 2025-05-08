import React, {useState, useRef} from "react";
import Film from "./Film";

export default function FilmList(){
    const [films, setFilms] = useState([{
        id: 1,
        title: "Första filmen"
    }
]);

const inputRef = useRef();
const ratingRef = useRef();

function addItem(event){
    if(event.keyCode === 13){
        const newId = films.length > 0 ? films[films.length - 1].id + 1 : 1;
        
        setFilms([...films, {
            id: newId,
            title: inputRef.current.value,
            rating: ratingRef.current.value,
        }]);

        inputRef.current.value = "";
    }
}

function deleteItem(id){

}

    return (
        <div>
            <label for="title-field">Titel:</label>
            <input className="form-control" type="text" id="title-field"  
            placeholder="Ange film titel här..." ref={inputRef} onKeyUp={addItem}/>
            
        
            <label for="rating-field">Betyg:</label>
            <select id="rating-field" type="text" className="form-control" ref={ratingRef} onKeyUp={addItem}>
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            
            <ul className="list-group">
                { films.map(film => <Film key={film.id} item={film}/>) }
            </ul>
        </div>
    )
}