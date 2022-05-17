import React, { useState,useContext } from "react";
import "./CreatePage.css";
import {FirebaseContext,AuthContext} from '../../store/Context'
import {useNavigate} from 'react-router-dom'


function CreatePage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState([]);
  const [state, setState] = useState(false);
  const date = new Date()
  const navigate = useNavigate()


  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)

  const formSubmit = (e)=>{
    e.preventDefault();
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('Products').add({
          name, 
          category, 
          price, 
          url, 
          userId: user.uid, 
          createdAt: date.toDateString()
        }).then(()=>{
          navigate('/')
        })
      })
    })
  }

  return (
    <card>
      <div className="create-container">
        <form
          onSubmit={formSubmit}
        >
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            id="fname"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            name="category"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            id="fname"
            name="Price"
          />
          <br />

          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={`${state ? URL.createObjectURL(image) : ""}`}
            className="mb-2"
          ></img>

          <br />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              setState(true);
            }}
            type="file"
          />
          <br />
          <button type="submit" className="uploadBtn">
            upload and Submit
          </button>
        </form>
      </div>
    </card>
  );
}

export default CreatePage;
