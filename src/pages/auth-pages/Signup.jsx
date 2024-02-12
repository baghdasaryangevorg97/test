import React, { useState } from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


function Signup() {
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
                        <p className="lead fw-normal mb-0 mx-3 me-3">Sign up</p>
                    </div>

                    <MDBInput wrapperClass='mb-4' label='Email address' onChange={e => setData({ ...data, email: e.target.value })} type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Password' onChange={e => setData({ ...data, password: e.target.value })} type='password' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Password confirmation' onChange={e => setData({ ...data, 'password-confirmation': e.target.value })} type='password' size="lg" />

                    <div className='text-center text-md-start mt-4 pt-2'>
                        <button type='button' onClick={submit} className='btn btn-primary btn-lg px-5'>Signup</button>
                    </div>
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Signup