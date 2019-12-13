import React from 'react'
import { render } from '@testing-library/react'
import { withRouter } from 'react-router-dom';




class Contact extends React.Component {
    constructor(props) {
        super(props);


    }




    render() {
        return (
            <div>

                <table class="table">
                    <thead class="grey lighten-2">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Middlename</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">address</th>
                            <th scope="col">Education Qualification</th>
                            <th scope="col">Hpno</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Confirm Password</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{this.props.location.state.fname}</td>
                            <td>{this.props.location.state.mname}</td>
                            <td>{this.props.location.state.lname}</td>
                            <td>{this.props.location.state.ads1 + "," + this.props.location.state.ads2 + "" + this.props.location.state.location}</td>
                            <td>{this.props.location.state.eduq}</td>
                            <td>{this.props.location.state.hpno}</td>
                            <td>{this.props.location.state.username}</td>
                            <td>{this.props.location.state.pwd}</td>
                            <td>{this.props.location.state.cpwd}</td>

                            <td></td>
                        </tr>
                    </tbody>
                </table>





            </div>



        )

    }
}



export default Contact;