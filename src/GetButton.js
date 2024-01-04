import React from 'react';

class GetButton extends React.Component {
    render () {
        return <button
            onClick={console.log}
            className="btn btn-secondary"
        >
            Get info
        </button>
    }
}


export default GetButton;
