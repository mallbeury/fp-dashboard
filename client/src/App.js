import React, { Component } from 'react';
import { Card, Row, Col, Statistic, Button } from "antd";
import "antd/dist/antd.css";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {users: 10};

        this.fetchData();
    }

    fetchData() {
        let url = '/fp-totals';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({users: 50});
            });

    }

  render() {
    return (
        <div className="site-statistic-demo-card">

        <Row gutter={16}>
          <Col span={12}>
              <Card>
                  <Statistic title="Fundraisers" value={this.state.users} />
              </Card>
          </Col>
          <Col span={12}>
              <Card>
                  <Statistic title="Fundraising Pages" value={99} />
              </Card>
          </Col>
          <Col span={12}>
              <Card>
                  <Statistic title="Total Donations" value={500.43} precision={2} prefix={'$'} />
              </Card>
          </Col>
      </Row>

      <Button type="primary" style={{ marginLeft: 8 }} onClick={e => this.setState({ users: 99 })}>Test Update</Button>

      </div>
    );
  }
}

export default App;
