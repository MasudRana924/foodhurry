import React from 'react';
import { Container } from 'react-bootstrap';
import { Link,useLocation,useHistory} from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
const Login = () => {

    const{googleSignIn}=useFirebase()
    const location = useLocation()
    const location_url=location.state?.from || '/home'
    const history=useHistory()
    const handleGoogleLogIn=()=>{
        googleSignIn()
        .then(result => {
            history.push(location_url)
        })
    }
    return (
        <Container fluid>
            <div className="row mt-5">
                <div className="col">

                </div>
                <div className="col-md-4 col-sm-10">
                    <div class=" card ps-3 pe-3 border-1 rounded-3 shadow-class">
                        <h3 class="mt-3 h3 ">Sign-in with</h3>

                        <button onClick={handleGoogleLogIn} class="w-25 mx-auto btn rounded-3 bg-success mt-3">Google</button>
                        <br />
                        -----------OR-----------
                        <small class="para-two mt-3 text-start">Email</small>
                        <input type="text" class="form-control mt-1 mb-1 h-75" />
                        <small class="para-two text-start">Password</small>
                        <input type="text" class="form-control mt-1 mb-1 h-75" />
                        <button class="w-100 btn rounded-3 bg-info mt-3">Continue</button>
                        <br />
                        <p class="mt-1 para">By continuing, you agree to Amazon's <Link className=" text-decoration-none">Conditions of Use </Link  >
                            and <Link className=" text-decoration-none">Privacy Notice</Link  >  </p>

                        
                    </div>
                    <div class="d-flex justify-content-center align-items-center w-100 mb-2">
                        <div class="col-4">
                            <hr />
                        </div>
                        <div class="col-4">
                            <small class="text-center para ps-3">New to here?</small>
                        </div>
                        <div class="col-4">
                            <hr />
                        </div>
                    </div>
                    <button className="btn w-100 bg-secondary" >Create your account</button>

                </div>
                <div className="col">

                </div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-md-8 col-sm-8">
                    <hr />
                    <div class="row row-cols-1">
                        <div class="col-3"></div>
                        <div class="col-6  ">
                            <div class="desc">
                                <p>
                                    <Link className=" text-decoration-none">Conditions of Use </Link  >
                                    and <Link className=" text-decoration-none">Privacy Notice</Link  > <Link className=" text-decoration-none">Help</Link  >  </p>
                            </div>
                            <p class="para ps-2 text-center"> &#169; 2021 ,all rights reserved team</p>
                        </div>
                        <div class="col-3"></div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>

        </Container>
    );
};

export default Login;