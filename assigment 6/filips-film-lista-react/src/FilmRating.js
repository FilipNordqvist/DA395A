import React, {useState, useRef} from "react";

export default function FilmRating(){
    return(
        <div>
        <label for="rating-field">Betyg:</label>
        <select type="text" id="rating-field" className="form-control">
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" className="btn btn-success mt-3" value="Spara film"/>
        </div>
    )
}