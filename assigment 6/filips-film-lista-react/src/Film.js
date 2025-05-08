import React from "react"

export default function Film(props) {
    

    return (
            <li className="list-group-item">
                { props.item.title }
                <button type="submit" className="btn btn-success mt-3" value="Spara film"/>
            </li>
    )
}
