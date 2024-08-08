const Explore = () =>{
    return(
        <div>
            <div className="flex h-10 w-52 p-1 mb-2 ml-6">
                <span className="font-semibold">Explore</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Trending icon" src={require("../../utils/images/navbar/trending.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Trending</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Shopping icon" src={require("../../utils/images/navbar/shopping.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Shopping</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Music icon" src={require("../../utils/images/navbar/music.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Music</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Movies icon" src={require("../../utils/images/navbar/moives.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Movies</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="live icon" src={require("../../utils/images/navbar/live.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Live</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Gaming icon" src={require("../../utils/images/navbar/gaming.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Gaming</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="News icon" src={require("../../utils/images/navbar/news.png")}/>
                <span className="pl-4 w-32 h-5 m-1">News</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Sports icon" src={require("../../utils/images/navbar/sports.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Sports</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Courses icon" src={require("../../utils/images/navbar/courses.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Courses</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 pl-2 ml-2 m-1" alt="Fashion Beauty icon" src={require("../../utils/images/navbar/fashion-beauty.png")}/>
                <span className="pl-4 w-36 h-5 m-1">Fashion & Beauty</span>
            </div>
        </div>
    )
}
export default Explore;