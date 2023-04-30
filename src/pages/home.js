import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";

export default function HomePage() {
  const [profile,setProfile]=useState("");
  const nevigate = useNavigate();
     useEffect(()=>{
       let data = JSON.parse(localStorage.getItem("loggedInUser"));
       setProfile(data)
     },[])
     
  useEffect(() => {
     let data = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!data) {
      nevigate("/signin");
    }
  }, [profile, nevigate]);
  return (
    <>
      {profile && <App />}
    </>
  );
}
