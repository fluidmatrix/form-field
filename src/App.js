import './App.css';
import { useState } from 'react';
  const PasswordErrorMessage =() => {
    return(
      <p className='FieldError'>
        Password should at least be 8 characters long!
      </p>
    )}
  
function App () {    
  function getIsFormValid() {
    return (
      firstName &&
      isValidEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created")
    clearForm()
  }
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [emailTouched, setEmailTouched] = useState(false)
    const [password, setPassword] = useState({
      value: "",
      isTouched: false,
    })
    const [role, setRole] = useState("role")
  
  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword({value:"",isTouched:false})
    setRole('role')
  }
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
    return (
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className='field'>
              <label>First Name:<sup>* </sup>
              </label>
              <input 
                value={firstName}
                placeholder='First Name'
                onChange={e => setFirstName(e.target.value)}
                />
            </div>
            <div className='field'>
              <label>Last Name: </label>
              <input 
                value={lastName}
                placeholder='Last Name'
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div className='field'>
              <label>
                Email:<sup>*</sup>
              </label>
              <input  
                value={email}
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
              />
              {emailTouched && !isValidEmail(email) && (
                <p className='FieldError'>Please Enter a Valid Email Address!</p>
              )}
            </div>
            <div className='field'>
              <label>
                Password:<sup>*</sup>
              </label>
              <input
                value={password.value}
                placeholder='Password'
                type='password'
                onChange={ (e)=>
                  setPassword({
                    ...password,
                    value: e.target.value
                  })
                }
                onBlur={() => setPassword((prev) => ({
                  ...prev,
                  isTouched:true
                }))
              }
              />
              {password.isTouched && password.value.length < 8 &&
              <PasswordErrorMessage/>}
            </div>
              <div className='field'>
                <label>Role <sup>*</sup></label>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                >
                  <option value="role">Role</option>
                  <option value="Individual">Individual</option>
                  <option value="Business">Business</option>
                </select>
              </div>
              <div className='buttonClass'>
              <button type='submit' disabled={!getIsFormValid()}>
                Create Account
              </button>
              <button 
                type='button' 
                className='reset' 
                onClick={() => {
                  if(window.confirm('Are you sure you want to clear the form')){
                    clearForm();
                  }
                }}>
                Reset
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    )


}export default App;
