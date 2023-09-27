import React, { Component } from "react";
import CardList from "./cardList";
import { sub } from "./sub";
import Searchbox from "./Searchbox";
import Scroll from "./Scroll";
import NavBar from "./component/NavBar";
import Home from "./home/Home";

import {
    Routes,
    Route,
} from "react-router-dom";


class App extends Component {
    constructor() {
        super()
        this.state = {
            sub: sub,
            serchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ serchfield: event.target.value })

    }


    render() {
        const filtersub = this.state.sub.filter(sub => {
            return sub.name.toLowerCase().includes(this.state.serchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <NavBar onsearch={this.onSearchChange} />
                <Routes>
                    
                    <Route path="/faculty" element={<Scroll>
                        <CardList sub={filtersub} />
                    </Scroll>} />
                    <Route path="/" element={<Home />} />

                </Routes>

            </div>
        );
    }
}

export default App;