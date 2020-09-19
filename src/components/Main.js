import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null,
          device_id: '',
          api_key: '',
          t1: '',
          isuser: false
        };
        this.switchOn = this.switchOn.bind(this);
        this.switchOff = this.switchOff.bind(this);
    }

    componentWillMount() {
        this.props.users.map((user, key) => {
            if(user.userAddress==this.props.account) {
                this.setState({ user })
                this.setState({ isuser: true})
            }
            }
        )
    }

    switchOn(event) {
        fetch(`https://cloud.boltiot.com/remote/${this.state.api_key}/digitalWrite?pin=${event.target.name}&state=HIGH&deviceName=${this.state.device_id}`)
        const t1 = new Date().getTime()
        this.setState({ t1 })
    }

    switchOff(event) {
        fetch(`https://cloud.boltiot.com/remote/${this.state.api_key}/digitalWrite?pin=${event.target.name}&state=LOW&deviceName=${this.state.device_id}`)
        const t2 = new Date().getTime()
        const tdiff = (t2-this.state.t1)/1000
        this.props.addUnit(Math.round(tdiff*2))
        this.setState({ t1: 0})
    }

    render() { 
        if (this.state.isuser) {
        return (
            <div className="container-fluid mt-5">
                <div className="row">
                    <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
                    <div className="content mr-auto ml-auto">
                    <p>&nbsp;</p>
                    <center>
                    <p>Welcome, {this.state.user.userAddress}</p>
                    <h1 style={{color: "royalblue"}}>Home-Automation</h1>
                    <br/><br/>
                    <h2>Enter your Bolt IoT Device Credentials</h2>
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
                        Update
                    </Button>
                    <br/><br/>
                    </Form>
                    <p>&nbsp;&nbsp;</p>
                    <br/><br/>
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
                    <div class="coupon">
                        <h3>Switch 3</h3>
                        <Button variant="success" name="3" onClick={this.switchOn}>On</Button>{' '}
                        <Button variant="danger" name="3" onClick={this.switchOff}>Off</Button>
                    </div>
                    <p>&nbsp;&nbsp;</p>  
                    <br/><br/>
                    <p>Units you have consumed: {this.state.user.units.toString()} units</p>
                    <p>Amount due: {parseInt(this.state.user.units.toString())*0.01} ETH</p>
                    <Button variant="info" name="3">Pay Now</Button>                 
                    </center>
                    </div>
              </main>
            </div>
          </div>
        );}
        else {
            return (
                <div className="container-fluid mt-5">
                <div className="row">
                    <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
                    <div className="content mr-auto ml-auto">
                    <p>&nbsp;</p>
                    <center>
                    <h1 style={{color: "royalblue"}}>Home-Automation</h1>
                    <br/><br/>
                    <Button variant="outline-info" onClick={(event) => {this.props.initializeUser()}}>Add me as New User</Button>
                    </center>
                    </div>
                    </main>
                </div>
                </div>
            );
        }
    }
}

export default Main;