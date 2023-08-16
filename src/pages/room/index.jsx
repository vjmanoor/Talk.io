import React from "react";

import { useParams } from "react-router-dom";

import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const RoomPage = () =>{

    const {roomId} = useParams();

    const myMeeting = async (element) =>{
        const appID = 1477230196;
        const serverSecret = "01d2471a0e0237ae32e548b76614e3bf";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId, 

            Date.now().toString() ,"Karthik");

            const zp = ZegoUIKitPrebuilt.create(kitToken)

            zp.joinRoom({
                container:element,
                scenario:{
                    mode: ZegoUIKitPrebuilt.VideoConference
                }
            })
    }
    return(
    <div className="room-page">
        <div ref={myMeeting}/>
    </div>
    )
}


export default RoomPage;