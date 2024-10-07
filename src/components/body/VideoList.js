import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoList = () =>{
    const [data,setData] = useState();
    const getVideos = async () =>{
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        //console.log(json.items);
        setData(json.items);
    }
    useEffect(()=>{getVideos()},[])    
    return(
        <div className="flex flex-wrap">
            { 
                data?.map((video)=>{
                    return(
                        <div key={video.id}>
                             <Link key={video.id} to={"/watch?v=" + video.id}>
                                <VideoCard info={video} />
                                </Link>
                        </div>
                    )      
                })
            }
        </div>
    )
}
export default VideoList;