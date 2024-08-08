const MoreFromYoutube = () =>{
    return(
        <div>
            <div className="flex h-10 w-52 p-1 mb-2 ml-6">
                <span className="font-semibold">More From Youtube</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1 ml-3 pl-3" alt="Premium icon" src={require("../../utils/images/navbar/youtube-premium.png")}/>
                <span className="pl-6 w-44 h-5 mb-1 mt-1">YouTube Premium</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Music icon" src={require("../../utils/images/navbar/youtube-music.png")}/>
                <span className="pl-4 w-32 h-5 m-1">YouTube Music</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Studio icon" src={require("../../utils/images/navbar/youtube-studio.png")}/>
                <span className="pl-4 w-32 h-5 m-1">YouTube Studio</span>
            </div>
        </div>
    )
}
export default MoreFromYoutube;