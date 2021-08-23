import React from 'react';
import './cards.css';
import card from "react-bootstrap/card";
export default function cards(props) {
    return (
        <div className="cards">
            {props.cardData.map((person, index) => {
                return (
                    <div className="card-1">
                    <card style={{width: "21rem"}}>
                    <card.Img varient="bottom" src={person.avatar} />
                        <card.Body>
                            <card.Text>
                                <ul>
                                    <li>ID: {person.id}</li>
                                    <li>Name: {person.first_name} {person.last_name}</li>
                                    <li>Email: {person.email}</li>
                                </ul>
                            </card.Text>
                        </card.Body>
                    </card>
                    </div>
                );
            })}
        </div>
    );
}