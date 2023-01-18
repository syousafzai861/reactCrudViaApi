import React from 'react'

const Update = () => {
  return (
   <> 
   <h4 className='my-3'>UPDATE FORM</h4>
           <form>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
            //   onChange={(e)=>setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
            //   onChange={(e)=>setEmail(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <button type="submit" className="btn btn-primary my-3">
            Update
          </button>
        </form>
   </>
  )
}

export default Update
