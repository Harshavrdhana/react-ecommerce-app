import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from '../contexts/AuthProvider';

const title = "Register";
const socialTitle = "Login With Social Media"
const btnText = "Signup Now"

const Signup = () => {

const [errorMessage, seterrorMessage] = React.useState("")
const { signUpWithGmail, createUser } = useContext(AuthContext)
const location = useLocation();
const navigate = useNavigate();

const from = location.state?.from?.pathname || "/";

const handleRegister = () => {
  signUpWithGmail().then((result) => {
    const user = result.user;
    navigate(from, { replace: true })
  }).catch((error) => {
    const errorMsg = error.message;
    seterrorMessage("Please provide valid email & password")
  })
}
 
const handleSignup = (event) => {
  event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if(password !== confirmPassword){
      seterrorMessage("Password doesn't match! please provide a correct password")
    }else{
      seterrorMessage("")
      createUser(email,password).then((userCredential)=>{
        const user = userCredential.user
        alert("Account created successfully done!!!")
        navigate(from,{replace: true})
      }).catch((error)=>{    
        console.log(error.message);
        alert(`${error.message}`)
      })
    }
}

return (
  <div className='login-section padding-tb section-bg'>
    <div className="container">
      <div className="account-wrapper">
        <h3 className='title'>{title}</h3>
        <form
          className='account-form'
          onSubmit={handleSignup}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              id='name'
              placeholder='Full Name *'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id='email'
              placeholder='Email Address *'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id='password'
              placeholder='Password *'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder='Confirm Password *'
              required
            />
          </div>

          {/* showing message */}
          <div>
            {
              errorMessage && (
                <div className="error-message text-danger mb-1 ">
                  {
                    errorMessage
                  }
                </div>
              )
            }
          </div>

          <div className="form-group">
            <button type='submit ' className='d-block lab-btn'>
              <span>{btnText}</span>
            </button>
          </div>
        </form>

        {/* account bottom */}
        <div className="account-bottom">
          <span className='d-block cate pt-10 '>
            Have an Account ?<Link to="/login"> Login</Link>
          </span>
          <span className='or'>
            OR
          </span>

          {/* social login */}
          <h5 className='subtitle'>{socialTitle}</h5>
          <ul className='lab-ul social-icons justify-content-center'>
            <li>
              <button className='github' onClick={handleRegister}><i className='icofont-github'></i></button>
            </li>
            <li>
              <a href='/' className='facebook'><i className='icof ont-facebook'></i></a>
            </li>
            <li>
              <a href='/' className='twitter'><i className='icofont-twitter'></i></a>
            </li>
            <li>
              <a href='/' className='linkedin'><i className='icofont-linkedin'></i></a>
            </li>
            <li>
              <a href='/' className='instagram'><i className='icofont-instagram'></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
}

export default Signup