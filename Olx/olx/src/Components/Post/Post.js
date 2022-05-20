import React,{useEffect,useState,useContext} from "react";
import "./Post.css";
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import {useNavigate} from 'react-router-dom'

function Post() {
const {firebase} = useContext(FirebaseContext)
const [products, setProducts] = useState([]);
const {setPostDetails} = useContext(PostContext)
const navigate = useNavigate()










useEffect(()=>{
  firebase.firestore().collection('Products').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{
      return{
        ...product.data(),
        id: product.id
      }
    })
    console.log(allPost)
    setProducts(allPost)
  })
  },[])


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading d-flex align-items-center">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards" >
         {products.map((product)=>{
           return(
            <div
             className="card col-lg-3 col-md-4 col-sm-6 col-xsm-12">
            <div className="p-3 bg-white shadow w-100 card-child">
              <div className="favorite">
              <i style={{'fontSize': '25px'}} className='fa-solid fa-heart'></i>
              </div>
              <div className="image" onClick={()=>{
              setPostDetails(product)
              navigate('/view/post')
            }}>
                <img src={product.url} alt="" />
              </div>
              <div className="content" onClick={()=>{
              setPostDetails(product)
              navigate('/view/post')
            }}>
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
            <div className="feature"><h6>Featured</h6></div>
          </div>
           )
         }) }
        </div>
      </div>
    </div>
  );
}

export default Post;
