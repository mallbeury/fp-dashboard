import React, { Component } from 'react';
import moment from 'moment-timezone';
import Example from "./Example"
import "antd/dist/antd.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {fundraisers: 0, fundraising_pages: 0, animating: false};

        this.handleClick = this.handleClick.bind(this);

        this.eventSearchTime = moment().utc();

        this.fetchData();
    }

    handleClick() {
        if (!this.state.animating) {
            this.setState({ fundraisers: 10 });
            this.setState({ animating: true });

            setTimeout(() => {
                this.setState({animating: false});
            }, 4000)
        }
    }

    fetchData() {
        console.log('fetchData');
        let eventSearchTime = this.eventSearchTime;
        console.log(eventSearchTime.format('YYYY-MM-DD HH:mm:ss'));

        let url = '/fp-events?eventTime=' + eventSearchTime.format('YYYY-MM-DD HH:mm:ss');

        // store time for next time
        this.eventSearchTime = moment().utc();

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.length) {
                    this.handleClick();
                }

                setTimeout(() => {
                    this.fetchData();
                }, 4000)

            });
    }

  render() {
    return (
        <div onClick={this.handleClick}>
        <Example animating={this.state.animating} />
        </div>
    );
  }
}

export default App;
