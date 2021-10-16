import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lat: null, errMsg: ""};
    }

    state = {lat: null, errMsg: ""};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMsg: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was updated -  rerendered');
    }

    renderContent() {
        if (this.state.errMsg && !this.state.lat) {
            return <div>Error: { this.state.errMsg }</div>
        }
        else if (!this.state.errMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}  />
        }
        else {
            return <Spinner message='Please accept location request' />
        }
    }

    render() {
        return this.renderContent();
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));