import React from 'react'
import './CreatePage.css'

function CreatePage() {
  return (
    <card>
        <div className="create-container">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
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
              id="fname"
              name="category"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src="" className='mb-2'></img>
          <form>
            <br />
            <input type="file" />
            <br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
  )
}

export default CreatePage