import React, { Component } from 'react';
import Example from "./Example"
import "antd/dist/antd.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {fundraisers: 0, fundraising_pages: 0, animating: false};

        this.handleClick = this.handleClick.bind(this);

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
        let url = '/fp-totals';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({fundraisers: data[0].fundraisers});
                this.setState({fundraising_pages: data[0].fundraising_pages});
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
