import React from "react";
import {CATEGORY} from "../../Categories";
import {NavLink} from "react-router-dom";
import './Category.css';

const Category = () => {
    return (
        <div className='category-block'>
        <ul className="category-ul">
            <li className="category-links">
                <NavLink exact to="/" activeStyle={{textDecoration: 'underline'}}
                >All</NavLink>
            </li>
            {CATEGORY.map((quote, i) => (
                <li key={i} className="category-links">
                    <NavLink
                        exact to={`/quotes/${quote.category}`}
                        activeStyle={{textDecoration: 'underline'}}> {quote.title}</NavLink>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default Category;