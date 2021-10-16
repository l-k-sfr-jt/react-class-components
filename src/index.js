import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {lat: null, errMsg: ""};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({lat: position.coords.latitude})
            },
            err => {
                this.setState({errMsg: err.message})
            }
        );
    }

    render() {
        if (this.state.errMsg && !this.state.lat) {
            return <div>Error: { this.state.errMsg }</div>
        }
        else if (!this.state.errMsg && this.state.lat) {
            return <div>Latitude: { this.state.lat }</div>
        }
        else {
            return <div>Loading..</div>
        }
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));