import React from "react"

export default function Film(props) {
    

    return (
            <li className="list-group-item">
                { props.item.title }
            </li>
    )
}
