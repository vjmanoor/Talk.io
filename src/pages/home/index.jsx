import React, {useState} from "react";
import { useNavigate } from "react-router-dom";




const HomePage = () => {
    const [roomCode, setRoomCode] = useState("")

    const navigate = useNavigate();

    const handleFormSubmit = (ev)=>{
        ev.preventDefault();
        navigate(`/room/${roomCode}`)
    }


    return(
        <div className="home-page">
            <form onSubmit={handleFormSubmit} className="form">
                <div id="display-container">
                    <label id="text-desc">Enter Room Code</label>
                    <input id="idBar"
                    value={roomCode} 
                    onChange={(e) => setRoomCode(e.target.value)} 
                    type="text" 
                    required 
                    placeholder="Enter Room Code"/>
                </div>
                <button type="submit" id="sumbitBtn"><b>Enter Room</b></button>
            </form>
        </div>
    )
}

export default HomePage