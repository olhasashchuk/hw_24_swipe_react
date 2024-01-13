import { Component } from 'react';

class Inputitem extends Component {
    render () {
        const { disabled } = this.props;
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
                disabled={disabled}
            />
        </>
    }
}
export default Inputitem;
