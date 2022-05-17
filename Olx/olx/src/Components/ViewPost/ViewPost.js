import React,{useEffect,useState,useContext} from 'react'
import './ViewPost.css'
import bike from '../../Images/R15V3.jpg'
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';

function ViewPost() {
  const [userDetails, setUserDetails] = useState();
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)


  useEffect(() => {
    const {userId}= postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((response)=>{
      response.forEach(doc =>{
        setUserDetails(doc.data())
      })
    })
  },[]);


  return (
    <div className="view-container container-fluid row">
      <div className="imageShowDiv col-xlg-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection col-xlg-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="productDetails pl-4">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="pl-4 contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  )
}

export default ViewPost