import React, { Component } from 'react';
import { Card, Row, Col, Statistic, Button } from "antd";
import Example from "./Example"
import "antd/dist/antd.css";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {fundraisers: 0, fundraising_pages: 0, animating: false};

        this.handleClick = this.handleClick.bind(this);

        this.fetchData();
    }

    handleClick() {
        this.setState({ fundraisers: 10 });
        this.setState({ animating: true });

        setTimeout(() => {
            this.setState({animating: false});
        }, 4000)

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
        <div className="site-statistic-demo-card">

        <Row gutter={16}>
          <Col span={12}>
              <Card>
                  <Statistic title="Fundraisers" value={this.state.fundraisers} />
              </Card>
          </Col>
          <Col span={12}>
              <Card>
                  <Statistic title="Fundraising Pages" value={this.state.fundraising_pages} />
              </Card>
          </Col>
          <Col span={12}>
              <Card>
                  <Statistic title="Total Donations" value={500.43} precision={2} prefix={'$'} />
              </Card>
          </Col>
      </Row>

        <Example animating={this.state.animating} />

            <Button type="primary" style={{ marginLeft: 8 }} onClick={this.handleClick}>Test Update</Button>
      </div>
    );
  }
}

export default App;
