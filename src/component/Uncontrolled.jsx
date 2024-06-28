import React from 'react'

const Uncontrolled = () => {

    let name=React.createContext();
    let email=React.createContext();
    const submit=()=>{
        console.log(name.current.value)
        console.log(email.current.value)
    }

  return (
    <div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type='text' className="form-control w-[50%]" name="email"  ref={email} />
            </div>

           
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type='text' className="form-control w-[50%]" name="name" ref={name} />
                </div>

                <div className="form-group">
            <button className="btn" onClick={submit}>Submit</button>
          </div>

    </div>
  )
}

export default Uncontrolled