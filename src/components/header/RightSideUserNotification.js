const RightSideUserNotification = () =>{
    return(
        <div className="w-1/4 flex flex-row-reverse pr-5">
            <img className="w-11 h-8 mt-3 p-1 m-2" alt="User icon" src={require("../../utils/images/usericonforHeader.png")}/>
            <img className="w-10 h-8 mt-3 p-1 m-2" alt="Bell Icon" src={require("../../utils/images/notificationIconforHeader.png")}/>
            
        </div>
    )
}
export default RightSideUserNotification;