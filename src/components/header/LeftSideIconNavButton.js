const LeftSideIconNavButton = () =>{
    return(
        <div className="flex flex-wrap w-1/4">
            <img className="w-10 h-8 mt-3 p-1 m-2 ml-6" alt="Nav Button" src={require("../../utils/images/Navbarbuttonforheader.png")}/>
            <img className="w-24 h-8 p-1 mt-3 m-2" alt="Youtube Icon" src={require("../../utils/images/YoutubeIconforHeader.png")}/>
        </div>
    )
}
export default LeftSideIconNavButton;