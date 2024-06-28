import React, { useState } from 'react';

const Practice = () => {
    const users = ["sumit", "Ashish", "Nikhil", "Naveen", "Ram"];
    const [checkedUser, setCheckedUser] = useState(["sumit"]);
      
    const handleChange =(e)=>{
          const {name, checked} =e.target;
          if(checked){
            const newCheckedUser = [...checkedUser, name];
            setCheckedUser(newCheckedUser);
            // console.log(newCheckedUser)
          }else{
               const newcheckedUser=checkedUser.filter((user)=>user!==name)
               setCheckedUser(newcheckedUser);
            //    console.log(newcheckedUser);
          }
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(checkedUser);
    }

    return (
            <form action="" onSubmit={handleSubmit}>
        <div>
            <div className='pt-20'>
                {users.map((user, index) => (
                    <div className='flex items-center gap-2 pl-20' key={index}>
                        <input 
                            type="checkbox" 
                            name={user} 
                            className='inline-block justify-start' 
                            onChange={handleChange} 
                            checked={checkedUser.includes(user) }
                        />
                        <h1>{user}</h1>
                    </div>
                ))}
            </div>
        </div>
        <button>Submit</button>
        </form>
    );
};

export default Practice;
