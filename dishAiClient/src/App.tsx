
// // import './App.css'
// import axios from "axios";
// import { useState } from "react";

// function App() {
//   const [image, setImage] = useState<File | null>(null);
//   const[data , setData] = useState<{ingredients:string, meal: string} | null>(null);

//   const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     if(!image) {
//       console.error("no image selected");
//       return ;
//     }
//     const formData = new FormData();
//     formData.append("image", image);
// try {
//     const response = await axios.post(
//       "http://localhost:3000/api/meal",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       }
//     );
//     setData(response.data);
//   } catch (error) {
//     console.error("Upload failed:", error);
//   }
//   };

//   return (
//     <div>
//       <nav className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
//         <div className="text-2xl font-bold text-gray-800">DishAl</div>

//         <ul className="flex space-x-6 text-gray-600 font-medium">
//           <li className="hover:text-red-500 cursor-pointer">About</li>
//           <li className="hover:text-red-500 cursor-pointer">Services</li>
//           <li className="hover:text-red-500 cursor-pointer">Waitlist</li>
//         </ul>
//       </nav>


//       <div>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <h1 className="text-4xl font-extrabold flex justify-center py-3 ">Input ingredients you have:</h1>
//           <div className="flex w-3/4 justify-between mx-auto">
//                     <label htmlFor="image" className="font-bold">Ingredients Image:</label>
//                     <br />
//                     <input
//                       type="file"
//                       id="image"
//                       name="image"
//                       className="border bg-gray-800 text-white font-bold py-1 px-2 rounded-2xl text-center flex justify-center items-center"
//                       onChange={handleImage}
//                       accept="image/*"
//                     />
//           </div>
//           </div>

//           <div className="flex w-[90%] justify-center mx-auto"><button type="submit" className="w-[200px] my-2.5   border-2 rounded-3xl">Process...</button></div>
//         </form>
//        <div className="w-[90%] mx-auto">
//          {data && (
//             <div className="mt-4 p-4 border rounded bg-gray-100">
//               <h2 className="font-bold text-lg">Ingredients Found:</h2>
//               <p>{data.ingredients}</p>
//               <h2 className="font-bold text-lg mt-4">Suggested Meal:</h2>
//               <p>{data.meal}</p>
//             </div>
//           )}
//        </div>
//       </div>
//     </div>
//   )
// };

// export default App

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Services from "./pages/services";
import Waitlist from "./pages/waitlist";
import Home from "./pages/home";

const App =() => {
 
 return(
  <div>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services /> }/>
      <Route path="/waitlist" element={<Waitlist />}/>
    </Routes>
  </div>
 )
}

export default App;