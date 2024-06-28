// import { Link } from 'react-router-dom';
// import '../../src/App.css';
// import { useState } from 'react';

// function Register() {
//   const [formData, setFormData] = useState({
//     username: 'default',
//     email: 'default@gmail.com',
//     occupation: 'student',
//     gender: 'male',
//     languages: ['html'],
//   });

//   const onChangeHandler = (event) => {
//     const { name, value, checked, type } = event.target;

//     if (name === 'languages') {
//       setFormData((prevState) => {
//         const languages = type === 'checkbox' && checked
//           ? [...prevState.languages, value]
//           : prevState.languages.filter((language) => language !== value);
//         return { ...prevState, languages };
//       });
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     // Add your form submission logic here
//   };

//   return (
//     <div className="mr-36">
//       <div className="App w-[100%] border h-[100vh] bg-[#ffff] rounded-xl drop-shadow-md">
//         <form onSubmit={onSubmitHandler}>
//           <div className="form-group">
//             <label htmlFor="username" className="form-label">User Name</label>
//             <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="occupation" className="form-label">Occupation</label>
//             <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
//               <option value="student">Student</option>
//               <option value="employee">Employee</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="gender" className="form-label">Gender</label>
//             <div>
//               <div>
//                 <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
//                 <label htmlFor="male">Male</label>
//               </div>
//               <div>
//                 <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
//                 <label htmlFor="female">Female</label>
//               </div>
//               <div>
//                 <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
//                 <label htmlFor="other">Other</label>
//               </div>
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="languages" className="form-label">Languages</label>
//             <div>
//               <div>
//                 <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.includes('html')} />
//                 <label htmlFor="html">HTML</label>
//               </div>
//               <div>
//                 <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.includes('css')} />
//                 <label htmlFor="css">CSS</label>
//               </div>
//               <div>
//                 <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.includes('javascript')} />
//                 <label htmlFor="javascript">JavaScript</label>
//               </div>
//             </div>
//           </div>
//           <div className="form-group">
//             <button className="btn" type="submit">Submit</button>
//           </div>
//           {/* <div className="form-group">
//             <Link to='/login'>Login</Link>
//           </div> */}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
