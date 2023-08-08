import React, { Component } from "react";
import CardList from "./cardList";
import { sub } from "./sub";
import Searchbox from "./searchbox";
import Scroll from "./Scroll";


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
                <h1>Computer-science subject</h1>
                <Searchbox SearchChange={this.onSearchChange} />
                <Scroll>
                    <CardList sub={filtersub} />
                </Scroll>
            </div>
        );
    }
}

export default App;