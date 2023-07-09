// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import axios from "axios";
// import Navbar from "@/components/navbar/Navbar";
// import { useRouter } from "next/router";
// useRouter


// const InsertNewTrip = () => {

//   const router = useRouter();

// const [destination, setDestination] = useState("")
// const [date, setDate] = useState("")
// const [imageUrl, setImageUrl] = useState("")

// const addNewTrip = async ()=>{
// const response = await axios.post("https://6491e3122f2c7ee6c2c91aac.mockapi.io/travel",
// { Destination: destination, Date: date, ImageUrl: imageUrl }
// );
// console.log("response", response);
// router.push("/");
// }

//   return (
//   <div>
//      <Navbar />
//     <div className={styles.tripForm} >
//       <input value={destination} onChange={(trip)=>setDestination(trip.target.value)} placeholder="Destination"/>
//       <input value={date} onChange={(trip)=>setDate(trip.target.value)} placeholder="Date"/>
//       <input value={imageUrl} onChange={(trip)=>setImageUrl(trip.target.value)} placeholder="Image URL"/>

//       <button onClick={()=>addNewTrip()}>Insert Trip</button>
//     </div>
//   </div>
//   );
// };
       
// export default InsertNewTrip;