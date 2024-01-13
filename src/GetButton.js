import { Component } from 'react';

class GetButton extends Component {

    render () {
        const { onClick, disabled } = this.props;

        return <button
            onClick={onClick}
            className="btn btn-secondary"
            disabled={disabled}
        >
            Get info
        </button>
    }
}


export default GetButton;
