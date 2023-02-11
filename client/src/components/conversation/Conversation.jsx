import "./conversation.css"
import {useState,useEffect} from "react";
import axios from "axios";


export default function Conversation({conversation,currentUser}) {
  const [user,setUser]=useState()
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(()=>{
    const friendId=conversation.members.find((m)=>m !==currentUser._id);
    console.log(friendId)
    const getUser=async()=>{
      
      try{
        const res=await axios.get("/users?userId="+friendId)
        console.log(res.data)
        setUser(res.data)

      }catch(err){
        console.log(err)

      }

    };
    getUser()

  },[currentUser,conversation])
  return (
    <div className="conservation">
      <img className="conversationImg" src={user?.profilePicture ? PF+user.profilePicture : PF+"noAvatar1.png"} alt="" />
      <span className="conversationName">{user?.username ? user.username :"anonim" }</span>
    </div>
  )
}
