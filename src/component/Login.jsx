import React, { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Login = () => {
   const[showPassword, setShowPassword]= useState(false);
   const[Inputfeild, SetInputfeild]= useState({
    name:"",
    password:"",
    occupation: 'student',
    gender: 'male',
    languages: ['html'],
   });
  //  const[namefeild, Setnamefeild]= useState("");

   const handleShowPassword = ()=>{
    setShowPassword(!showPassword)
   }

  //  const handleChange =(e)=>{
  //      const  {name, value} = e.target;
  //   if(name==="password")
  //       {
  //           console.log(...Inputfeild,{[name]:value});
  //           SetInputfeild(...Inputfeild,{[name]:value});

  //       }  else if(name=== "namefeild"){
  //           console.log(value);
  //           Setnamefeild(value);

  //       }
  //  } 

  const onChangeHandler =(e)=>{
    
    const {name, value, type, checked}=e.target;
    
    if (name === 'languages' && type==='checkbox') {
      // Handle changes for the 'languages' input field (assumed to be a checkbox)
      let updatedLanguages;
      if(checked){
        updatedLanguages =[...Inputfeild.languages, value] 
      }else{
        // Remove the language if checkbox is unchecked
        console.log("unchecked")
        console.log(value);

          updatedLanguages = Inputfeild.languages.filter(language => language !== value
            
          );
          console.log(updatedLanguages);
      }
         // Update the state immutably
        SetInputfeild(prevState => ({
          ...prevState,
          languages: updatedLanguages
        }));


      // const isCheckboxChecked = type === 'checkbox' && checked;
      // console.log(isCheckboxChecked);
      // SetInputfeild((prevState) => {
      //     const updatedLanguages = isCheckboxChecked
      //         ? [...prevState.languages, value]  // Add language to the array if checkbox is checked
      //         : prevState.languages.filter((language) => language !== value);  // Remove language from the array if checkbox is unchecked
      //     return { ...prevState, languages: updatedLanguages };
      // });
  // } else {
  //     // Handle changes for other input fields
  //     SetInputfeild({ ...Inputfeild, [name]: value });
  }
  }

   const submitForm =(e)=>{
    e.preventDefault();
    console.log("Submitted form with",Inputfeild, );

   }

  return (
    <form action="" onSubmit={submitForm}>
    <div className='mx-10 flex justify-center items-center lg:h-screen' >
       
            <div className='bg-[#FFFFFF] my-10  w-[100%]  rounded-xl border shadow-md drop-shadow-xl md:w-[50%] ' >
                  <h1 className='text-2xl flex justify-center pt-10'>Login Page</h1>
                  <div className='px-10 md:pt-10 py-10 '>
                      <div className='flex flex-col gap-5'>
                          <div>
                            <input type="text" placeholder='Enter Name' className='border-2 rounded-lg w-[100%] h-[3rem] pl-2 
                            md:w-[100%]' name='name' value={Inputfeild.name} onChange={onChangeHandler}/>
                              
                          </div>
                          <div className='flex items-center '>
                            <input type={showPassword ?"text":"password"} placeholder='Enter Password' 
                            name='password'
                            value={Inputfeild.password}
                            onChange={onChangeHandler}
                            className='border-2 rounded-lg w-[100%]
                            md:w-[100%] h-[3rem] pl-2 ' />
                            {
                                showPassword ?(
                                    <IoIosEye className=' -ml-12' onClick={handleShowPassword} />
                                ):(
                                    <IoIosEyeOff className=' -ml-12'  onClick={handleShowPassword} />
                                )


                            }          
                          </div>
                       </div>
                          <div className='flex justify-end'>
                              <button className='border w-20 bg-gray-600 text-white flex justify-center rounded-md px-12 py-1 mt-4 '>Login</       button>
                          </div>

                        <div className="">
                          <label htmlFor="occupation" className="form-label">Occupation</label>
                          <select className="form-select" name="occupation" onChange={onChangeHandler} value={Inputfeild.occupation}>
                            <option value="student">Student</option>
                            <option value="employee">Employee</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="">
                          <label htmlFor="gender" className="form-label">Gender</label>
                          <div>
                            <div>
                              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={Inputfeild.gender === 'male'} />
                              <label htmlFor="male">Male</label>
                            </div>
                            <div>
                              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={Inputfeild.gender === 'female'} />
                              <label htmlFor="female">Female</label>
                            </div>
                            <div>
                              <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={Inputfeild.gender === 'other'} />
                              <label htmlFor="other">Other</label>
                            </div>
                          </div>
                        </div>
                        <div >
                  </div>


            <label htmlFor="languages" className="form-label">Languages</label>
            <div>
              <div>
                <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={Inputfeild.languages.includes('html')} />
                <label htmlFor="html">HTML</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={Inputfeild.languages.includes('css')} />
                <label htmlFor="css">CSS</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={Inputfeild.languages.includes('javascript')} />
                <label htmlFor="javascript">JavaScript</label>
              </div>
            </div>
                  </div>
            </div> 
    </div>
    </form>
  )
}

export default Login