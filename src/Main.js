import React, { Component } from 'react';
import Inputitem from "./Inputitem";
import GetButton from "./GetButton";
import Spiner from "./Spiner";
import ResultSwapi from "./ResultSwapi";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        }
    }
    onClick = (test)=> {
        this.setState((state)=> {
            return {
                disabled: !state.disabled,
                background: 'grey',
            }
        })
    }

    render () {
        const { background, disabled } = this.state;
        const { onClick } = this;
        return (
            <>
            <div className="mb-3 input-group input-group-lg">
                <Inputitem disabled={disabled}/>
                <GetButton onClick={onClick} disabled={disabled}/>
            </div>
            <div className="result-swapi p-2 bg-light-subtle border rounded-2 border-light-subtle">
                <h2>Result:</h2>
                <Spiner />
                <ResultSwapi background={background} />
            </div>
            </>
        )
    }
}
export default Main;