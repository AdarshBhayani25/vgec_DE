
import React, { Component } from 'react'
import './MyButton.css';
export default class card extends Component {

    onclickmouse(id, name) {
   
        console.log("clicked")
        console.log(id)
        console.log(name)

    }
    
    render() {
       
        let { id, name, code, image,block,info } = this.props
        const buttonClass = id > 5 ? 'my-button red' : 'my-button';
        return (

            <>
              
                  <div className="tc dib br3 pa3 ma2 grow bw2 shadow border border-primary" style={{ backgroundColor: "#8ECDDD" }} >
                        <div className="col" >
                            <img alt={`${name}`} src={`${image}`} height={200} width={200} className="rounded border border bg-white "  />
                        </div>
                        <button className={buttonClass}>____</button>
                        <div>
                            <a className="btn btn-primary" href={`${name}`} onClick={() => this.onclickmouse({ id }, { name })}>{name} </a>
                            <h2> {code} </h2>
                            <h2>Block {block}</h2>
                            {/* <a href="#" className="btn btn-primary" id='vgec' onClick={() => this.onclickmouse({ id }, { name })}>more info {id}</a> */}
                        </div>
                    </div>
                  

            
            </>
        )
    }
}
