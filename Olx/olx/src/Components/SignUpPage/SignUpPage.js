import React,{useState, useContext} from 'react'
import './SignUpPage.css'
import Logo from '../../Images/olx-logo.png'
import {FirebaseContext} from '../../store/FirebaseContext';
import {useNavigate} from 'react-router-dom'


function SignUpPage() {

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(username)
    // console.log(firebase)
    // firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      // result.user.updateProfile({displayName: username})
    // })
    firebase.auth().createUserWithEmailAndPassword(email, 
      password).then(function(user) {
         var user = firebase.auth().currentUser;
         console.log(user)
         user.updateProfile({displayName: username}).then(()=>{
           firebase.firestore().collection('users').add({
            id: user.uid,
            username: username,
            phone: phone
           }).then(()=>{
              navigate('/login')
           })
         })
    });
  }

  return (
    <div>
      <div className="signup-container">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            required
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            required
            className="input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            required
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="phone"
            name="phone"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            required
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  )
}

export default SignUpPage