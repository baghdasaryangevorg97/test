import React, { useState } from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Login() {
    const [data, setData] = useState({})

    const submit = () => {
        console.log(data, "data")
    }
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                </MDBCol>

                <MDBCol col='4' md='5' className='mt-4'>

                    <div className="d-flex flex-row align-items-center justify-content-center my-4">
                        <p className="lead fw-normal mb-0 mx-3 me-3">Sign in</p>
                    </div>

                    <MDBInput wrapperClass='mb-4' label='Email address'  onChange={e => setData({ ...data, email: e.target.value })} type='email'  size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Password'  onChange={e => setData({ ...data, password: e.target.value })} type='password'  size="lg" />

                    <div className="d-flex justify-content-between mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <div className='text-center text-md-start mt-4 pt-2'>
                        <button type='button' className='btn btn-primary btn-lg px-5' onClick={submit}>Login</button>
                        <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to={"/signup"} className="link-danger">Register</Link></p>
                    </div>

                </MDBCol>

            </MDBRow>

            {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>

                <div>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='facebook-f' size="md" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='twitter' size="md" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='google' size="md" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='linkedin-in' size="md" />
                    </MDBBtn>

                </div>

            </div> */}

        </MDBContainer>
    );
}

export default Login