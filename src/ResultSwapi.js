import React from 'react';

class ResultSwapi extends React.Component {
    render () {
        const {background} = this.props;
        return <div style={{ background }}>
            <div className = "item-swapi d-flex gap-3" >
                <p className="controller-item border rounded-2">people</p>
                <p className="id-item border rounded-2">1</p>
            </div>
            <pre>
                    "name": "Luke Skywalker",<br/>
                    "height": "172",<br/>
                    "mass": "77",<br/>
                    "hair_color": "blond",<br/>
                    "skin_color": "fair",<br/>
                    "eye_color": "blue",<br/>
                    "birth_year": "19BBY",<br/>
                    "gender": "male",<br/>
                    "homeworld": "https://swapi.dev/api/planets/1/",<br/>
                    "films": [<br/>
                    "https://swapi.dev/api/films/1/",<br/>
                    "https://swapi.dev/api/films/2/",<br/>
                    "https://swapi.dev/api/films/3/",<br/>
                    "https://swapi.dev/api/films/6/"<br/>
                    ],<br/>
                    "species": [],<br/>
                    "vehicles": [<br/>
                    "https://swapi.dev/api/vehicles/14/",<br/>
                    "https://swapi.dev/api/vehicles/30/"<br/>
                    ],<br/>
                    "starships": [<br/>
                    "https://swapi.dev/api/starships/12/",<br/>
                    "https://swapi.dev/api/starships/22/"<br/>
                    ],<br/>
                    "created": "2014-12-09T13:50:51.644000Z",<br/>
                    "edited": "2014-12-20T21:17:56.891000Z",<br/>
                    "url": "https://swapi.dev/api/people/1/"<br/>
            </pre>
        </div>
    }
}

export default ResultSwapi;
