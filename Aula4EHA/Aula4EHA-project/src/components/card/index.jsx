import "./componentsStyle.css";

export function Card({description, title, price}) {
return(
<div className="cardTitleContainer">
    <p id="label">{description}</p>

<div class="titleAndPrice">
<h1 id="plan"> {title} </h1>
<p id="price"> <span id="cifrao">R$ </span>{price}<span id="period">/mês</span></p>

</div>

</div>
);
}

export function Button({title}){
    return(
        <button type="Button" class="signNow"><strong>{title}</strong></button>
    );
}

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

