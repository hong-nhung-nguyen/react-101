import { country } from "../../data/country";
import "./Country.scss";

function Country() {
    console.log(country);

    return(
        <>
            <ul className="country">
                {(country || []).map(itemCountry => (
                    <li key={itemCountry.id} className="country__item" >
                        <span className="country__text">{itemCountry.name}</span>
                        <ul className="country__sub">
                            {(itemCountry.city !== null && itemCountry.city.length > 0) && 
                            itemCountry.city.map(itemCity => (
                                <li key={itemCity.id} className="country__sub-item">{itemCity.name}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Country;