import React,{useState} from 'react'
import './CreatePage.css'

function CreatePage() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();


  return (
    <card>
        <div className="create-container">
          <form onSubmit={(e)=>{
            e.preventDefault()
          }}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
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
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              name="category"
            />
            <br />
            <label htmlFor="fname"
            >Price</label>
            <br />
            <input className="input" value={price} onChange={(e)=>{
              setPrice(e.target.value)
            }} type="number" id="fname" name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src='' className='mb-2'></img>
          
            <br />
            <input
            type="file" />
            <br />
            <button type='submit' className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
  )
}

export default CreatePage