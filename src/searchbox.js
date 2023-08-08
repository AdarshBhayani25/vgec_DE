import React from "react";

const Searchbox = ({ serchfield, SearchChange }) => {
    return (
        <div className="pa4">
           <img alt='search' src = 'https://static.vecteezy.com/system/resources/previews/012/625/003/original/3d-rendering-of-search-document-icon-illustration-png.png' height={40} width={40} />
            <input
                className="pa3 ba b--blue bg-lightest-green "
                type="search"
                placeholder="topic name"
                onChange={SearchChange} />
        </div>
    );
}

export default Searchbox;