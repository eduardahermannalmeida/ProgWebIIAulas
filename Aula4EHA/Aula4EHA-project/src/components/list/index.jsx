import "./styles.css"

export function List({item1, item2, item3, item4}){
    return(
    <ul className="list">
    <li> {item1} </li>
    <li> {item2} </li>
    <li> {item3} </li>
    <li> {item4} </li>
    </ul>
    );
    }