import React,{useEffect,useState,useContext} from "react";
import "./Post.css";
import Heart from "../../assets/Heart";
import bike from "../../Images/R15V3.jpg";
import { FirebaseContext } from "../../store/Context";

function Post() {
const {firebase} = useContext(FirebaseContext)
const [products, setProducts] = useState([]);

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
        <div className="cards" onClick={}>
         {products.map((product)=>{
           return(
            <div className="card col-lg-3 col-md-4 col-sm-6 col-xsm-12">
            <div className="p-3 bg-white shadow w-100 card-child">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          </div>
           )
         }) }
        </div>
      </div>
    </div>
  );
}

export default Post;
