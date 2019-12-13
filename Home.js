import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink } from 'reactstrap';
import { render } from '@testing-library/react'


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            mname: "",
            lname: "",
            ads1: "",
            ads2: "",
            location: "",
            eduq: "",
            hpno: "",
            username: "",
            pwd: "",
            cpwd: "",
            isValidate: true,
            isValidateMsg: "",
        }
    }

    handleInputChange(a) {
        var value = a.target.value;
        var name = a.target.name;
        this.setState({ [name]: value })
    }

    validateForm = () => {

        if (this.state.fname === "" || this.state.mname === "" || this.state.lname === "" || this.state.ads1 === "" || this.state.ads2 === "" || this.state.location === "" || this.state.eduq === "" || this.state.eduq === "" || this.state.username === "" || this.state.pwd === "" || this.state.cpwd === "") {
            this.setState({ isValidate: false })
            this.setState({ isValidateMsg: "Fields are missing" })
            alert("fields are missing");
        } else {
            this.setState({ isValidate: true }) 
           // this.context.router.push({pathname:'/contact/', state:{name:this.state.fname}})
           this.props.history.push('contact', {fname: this.state.fname, mname: this.state.mname,lname: this.state.lname, ads1: this.state.ads1, ads2: this.state.ads2 , location: this.state.location, eduq: this.state.eduq, hpno: this.state.hpno, username: this.state.username, pwd: this.state.pwd , cpwd: this.state.cpwd})
          

        }

       
 
    }

    // if (this.state.isValidate === false) {
    //     this.setState({ isValidateMsg: "Fields are missing" })
    //     //alert("fields are missing");
    //     console.log("fields are missing")
    // }



    render() {
        return (
            <form>
                <div className="contaiBner">
                    <Container>

                        <br></br>
                        First name:<input type="text" placeholder="Your Name" id="fname" name="fname" onChange={(a) => this.handleInputChange(a)} />
                        Middle name:<input type="text" placeholder="Your Middlename" id="mname" name="mname" onChange={(a) => this.handleInputChange(a)} />
                        Last Name<input type="text" placeholder="Your Lastname" id="lname" name="lname" onChange={(a) => this.handleInputChange(a)} />
                        Address 1:<input type="text" placeholder="Your Address 1" id="ads1" name="ads1" onChange={(a) => this.handleInputChange(a)} />
                        Adress 2<input type="text" placeholder="Your Address 2" id="ads2" name="ads2" onChange={(a) => this.handleInputChange(a)} />
                        Location<input type="text" placeholder="Your Location" id="location" name="location" onChange={(a) => this.handleInputChange(a)} />
                        Education Qualification<input type="text" placeholder="Your Education Qualification" id="eduq" name="eduq" onChange={(a) => this.handleInputChange(a)} />
                        Hp No<input type="text" placeholder="Your Handphone Number" id="hpno" name="hpno" onChange={(a) => this.handleInputChange(a)} />
                        Username<input type="text" placeholder="Your Username " id="username" name="username" onChange={(a) => this.handleInputChange(a)} />
                        Password<input type="text" placeholder="Your Password" id="pwd" name="pwd" onChange={(a) => this.handleInputChange(a)} />
                        Confirm Password<input type="text" placeholder="Your Confirm Password" id="cpwd" name="cpwd" onChange={(a) => this.handleInputChange(a)} />
                        <Button color="primary" onClick={this.validateForm}>Login</Button>

                    </Container>


                </div>
            </form>
        )
    }
}


export default Home = withRouter(Home);