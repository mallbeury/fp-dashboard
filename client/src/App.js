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
        this.eventsToProcess = [];

        this.fetchData();
    }

    playAnimation() {
        if (!this.state.animating) {
            this.setState({ fundraisers: 10 });
            this.setState({ animating: true });

            setTimeout(() => {
                this.setState({animating: false});
            }, 4000)
        }
    }

    checkForEvent() {
        // dowe have an event to process?
        if (this.eventsToProcess.length && !this.state.animating) {
            let event = this.eventsToProcess[0];
            console.log('EVENT');
            console.log(event);
            // remove 1st event
            this.eventsToProcess.shift();
            // play
            this.playAnimation();
        }
    }

    handleClick() {
        this.playAnimation();
    }

    fetchData() {
        console.log('fetchData');
        let eventSearchTime = this.eventSearchTime;
        console.log(eventSearchTime.format('YYYY-MM-DD HH:mm:ss'));

        let url = '/fp-events?eventTime=' + eventSearchTime.format('YYYY-MM-DD HH:mm:ss');

        // store time for next time
        this.eventSearchTime = moment().utc();

        let self = this;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.length) {
                    // fill event queue
                    data.forEach(function(event,n){
                        self.eventsToProcess.push(event);
                    });

                    console.log('EVENTS:'+this.eventsToProcess.length);
                    console.log(this.eventsToProcess);
                }
                this.checkForEvent();

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
