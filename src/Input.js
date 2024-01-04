import React from 'react';

class Input extends React.Component {
    render () {
        return <>
            <span
                className="input-group-text"
                id="basic-addon3"
            >
                https://swapi.dev/api/
            </span>
            <input
                className="form-control js--input"
                type="text"
                name="value"
                placeholder="people/1/"
                required
            />
        </>
    }
}


export default Input;
