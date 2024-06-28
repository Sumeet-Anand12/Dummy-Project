import React, { useEffect, useState } from 'react'
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
// https://restcountries.com/v2/all?fields=name

const SearchSelect = () => {

    const[country, setCountry]=useState([])
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

   useEffect(()=>{
           fetch('https://restcountries.com/v2/all?fields=name').then((res)=>res.json()).then((data)=>
            setCountry(data)
        )
   },[])
   const handleInput=(e)=>{
        let debounce;
           clearTimeout(debounce)
           debounce= setTimeout(() => {
                let data=e.target.value;
                console.log(data);
                setInputValue(data)
               }, 3000);
             
         
   }
 
  
  return (
      <div className='w-72 h-80 ml-[40%] mt-[10%] '>
        <div className='bg-white w-full p-2 rounded text-black flex justify-between items-center' onClick={()=>setOpen(!open)}>
            {
                selected?selected:"Select the Country"
            }
           <BiChevronDown size={20}  className={`${open?"rotate-0":"rotate-90"}`} />
        </div>
        {
            open?( <ul className={`bg-white w-full mt-2 overflow-auto block h-60 text-black`}>
                <div className='flex items-center px-2 sticky top-0 bg-white'>
                <AiOutlineSearch size={18} className="text-gray-700" /> 

                       <input type="text" className='w-full placeholder:text-gray-700 p-2 outline-none text-black' placeholder='Enter country Name' onChange={handleInput}/> 
                </div>
          {          
            country?.map((countries)=>(

                <li className={`text-black p-2 font-medium text-sm  hover:bg-sky-500 hover:text-white 
                cursor-pointer ${countries?.name.toLowerCase().startsWith(inputValue)?"block":"hidden"}`} key={countries.name} onClick={()=>{if(countries?.name.toLowerCase() !==selected.toLowerCase){
                    setSelected(countries.name)
                    setOpen(!open)
                }}}>
                  {countries.name}
            </li>
           
            )
            
            
            )
          }
         </ul>):(<li className='hidden'></li>)
        }
        


      </div>
  )
}

export default SearchSelect