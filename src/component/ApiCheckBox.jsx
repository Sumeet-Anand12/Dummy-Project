import React, { useEffect, useState } from 'react'
import '../../src/App.css';

const ApiCheckBox = () => {

    const [tableData, setTableData]=useState([])
    const [user, setUser]=useState([]);
      


    useEffect(() => {
        const fetchData = () => {
                       fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()).then((data)=>
                    
                        setTableData(data))};
                      fetchData();
    }, []);

    const handleChange=(e)=>{
        const {name, checked}=e.target;
        if(checked){
            const newUserdata = [...user, name];
            setUser(newUserdata)
            // console.log(user)
           

        }else{
            const newUserdata = user.filter((data)=>data !==name)
            setUser(newUserdata)
            // console.log(user);
        }
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user)
    }

  return (

    <div>
        <div>ApiCheckBox</div>
<form action="" onSubmit={handleSubmit}>
        <div className='flex justify-center'>
           
        <table>
  <tbody>
    {
      tableData.map((data, index) => (
        <tr key={index} className='flex items-center justify-between'>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.completed}</td>
          <td>
            <input type="checkbox"
              name={data.title}
              onChange={handleChange}
            />
          </td>
        </tr>
      ))
    }
  </tbody>
</table>
        </div>
            <button>Submit</button>

        </form>
    </div>
  )
}

export default ApiCheckBox