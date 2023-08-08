import React from "react";
import Card from "./card";

const CardList = ({ sub }) => {
    return (

        sub.map((user, i) => {
            return (
                <Card key={i}
                    id={sub[i].id}
                    code={sub[i].code}
                    name={sub[i].name}
                    image={sub[i].img} />

            );
        })
    );
}

export default CardList