import React, {useState, useRef} from "react";
import Film from "./Film";

export default function FilmList(){
    const [films, setFilms] = useState([{
        id: 1,
        title: "Första filmen"
    }
]);

const inputRef = useRef();

    return (
        <div>
            <label for="title-field">Titel:</label>
            <input className="form-control" type="text" id="title-field"  
            placeholder="Ange film titel här..." ref={inputRef} onClick onKeyUp={addItem}/>
            <ul className="list-group">
                { films.map(film => <Film key={film.id} item={film}/>) }
            </ul>
        </div>
    )
}