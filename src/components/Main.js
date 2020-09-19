import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          device_id: '',
          api_key: ''
        };
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
                        <h3>Switch 1</h3>
                        <Button variant="success">On</Button>{' '}
                        <Button variant="danger">Off</Button>
                    </div>
                    <p>&nbsp;&nbsp;</p>
                    <div class="coupon">
                        <h3>Switch 2</h3>
                        <Button variant="success">On</Button>{' '}
                        <Button variant="danger">Off</Button>
                    </div>
                    <p>&nbsp;&nbsp;</p>
                    <div class="coupon">
                        <h3>Switch 3</h3>
                        <Button variant="success">On</Button>{' '}
                        <Button variant="danger">Off</Button>
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