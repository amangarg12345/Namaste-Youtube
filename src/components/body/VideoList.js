import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../utils/images/Constant";
import VideoCard from "./VideoCard";
const VideoList = () =>{
    const [data,setData] = useState();
    const getVideos = async () =>{
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        console.log(json.items);
        setData(json.items);
    }
    useEffect(()=>{getVideos()},[])    
    return(
        <div>
            <VideoCard info={data[0]}/>
        </div>
    )
}
export default VideoList;