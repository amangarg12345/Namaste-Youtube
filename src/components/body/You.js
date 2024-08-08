const You = () =>{
    return(
        <div>
            <div className="flex h-10 w-52 p-1 mb-2 ml-6">
                <span className="font-semibold">You  {">"}</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Channel icon" src={require("../../utils/images/navbar/your-channel.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Your Channel</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="History icon" src={require("../../utils/images/navbar/history.png")}/>
                <span className="pl-4 w-32 h-5 m-1">History</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Playlist icon" src={require("../../utils/images/navbar/playlists.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Playlists</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Your Videos icon" src={require("../../utils/images/navbar/your-videos.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Your Videos</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Watch Later icon" src={require("../../utils/images/navbar/watch-later.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Watch Later</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Liked Videos icon" src={require("../../utils/images/navbar/liked-videos.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Liked Videos</span>
            </div>
        </div>
    )
}
export default You;