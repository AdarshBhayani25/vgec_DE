import React from "react";
const Card = ({ name, code, image }) => {
    return (
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow">
            <img alt={`${name}`} src={`${image}`} height={200} width={200} />
            <div>
                <h2>{name} </h2>
                <h2> {code} </h2>

            </div>
        </div>
    );
}

export default Card;