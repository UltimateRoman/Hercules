import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          device_id: '',
          api_key: ''
        };
        this.switchOn = this.switchOn.bind(this);
        this.switchOff = this.switchOff.bind(this);
    }

    switchOn(event) {
        fetch(`https://cloud.boltiot.com/remote/${this.state.api_key}/digitalWrite?pin=${event.target.name}&state=HIGH&deviceName=${this.state.device_id}`)
    }

    switchOff(event) {
        fetch(`https://cloud.boltiot.com/remote/${this.state.api_key}/digitalWrite?pin=${event.target.name}&state=LOW&deviceName=${this.state.device_id}`)
    }

    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row">
                    <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
                    <div className="content mr-auto ml-auto">
                    <p>&nbsp;</p>
                    <center>
                    <h1 style={{color: "royalblue"}}>Home-Automation</h1>
                    <h2>Enter your Bolt IoT device Credentials</h2>
                    <Form onSubmit={async(event) => {
                        event.preventDefault()
                        this.setState({ device_id: this.devid.value })
                        this.setState({ api_key: this.apik.value })
                    }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control 
                        type="text" 
                        id="devid"
                        placeholder="Enter Bolt Device ID" 
                        ref={(input) => { this.devid = input }}
                        required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                        type="password"
                        id="apik" 
                        placeholder="Enter Bolt API Key" 
                        ref={(input) => { this.apik = input }}
                        required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                    <p>&nbsp;&nbsp;</p>
                    <div class="coupon">
                        <h3>Switch 0</h3>
                        <Button variant="success" name="0" onClick={this.switchOn}>On</Button>{' '}
                        <Button variant="danger" name="0" onClick={this.switchOff}>Off</Button>
                    </div>
                    <p>&nbsp;&nbsp;</p>
                    <div class="coupon">
                        <h3>Switch 1</h3>
                        <Button variant="success" name="1" onClick={this.switchOn}>On</Button>{' '}
                        <Button variant="danger" name="1" onClick={this.switchOff}>Off</Button>
                    </div>
                    <p>&nbsp;&nbsp;</p>
                    <div class="coupon">
                        <h3>Switch 2</h3>
                        <Button variant="success" name="2" onClick={this.switchOn}>On</Button>{' '}
                        <Button variant="danger" name="2" onClick={this.switchOff}>Off</Button>
                    </div>
                    <p>&nbsp;&nbsp;</p>                    
                    </center>
                    </div>
              </main>
            </div>
          </div>
        );
    }
}

export default Main;