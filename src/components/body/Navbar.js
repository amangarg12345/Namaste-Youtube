import Explore from "./Explore";
import MoreFromYoutube from "./MoreFromYoutube";
import You from "./You";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () =>{
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early Return pattern
  if (!isMenuOpen) return null;
    return(
        <div className="shadow-gray-300 m-2">
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Home icon" src={require("../../utils/images/navbar/home.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Home</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Shorts icon" src={require("../../utils/images/navbar/shorts.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Shorts</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Subscription icon" src={require("../../utils/images/navbar/subscriptions.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Subscriptions</span>
            </div>
            <hr className="p-1 m-1"/>
            <You/>
            <hr className="p-1 m-1"/>
            <Explore/>
            <hr className="p-1 m-1"/>
            <MoreFromYoutube/>
            <hr className="p-1 m-1"/>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Settings Icon" src={require("../../utils/images/navbar/settings.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Settings</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Report icon" src={require("../../utils/images/navbar/report-history.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Report History</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="Help icon" src={require("../../utils/images/navbar/help.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Help</span>
            </div>
            <div className="flex h-10 w-52 rounded-lg hover:bg-gray-100 justify-center p-1">
                <img className="w-6 h-6 m-1" alt="feedback icon" src={require("../../utils/images/navbar/feedback.png")}/>
                <span className="pl-4 w-32 h-5 m-1">Send Feedback</span>
            </div>
            <hr className="p-1 m-1"/>
            <div className="h-10 w-52 p-1 mb-2 ml-6">
                <h4 className="font-semibold text-xs text-gray-600">About Press Copyright</h4>
                <h4 className="font-semibold text-xs  text-gray-600">Contact us Creators</h4>
                <h4 className="font-semibold text-xs  text-gray-600">Developers</h4>
                <h4 className="font-semibold text-xs pt-1 text-gray-600">Terms Privacy Policy & Safety</h4>
                <h4 className="font-semibold text-xs  text-gray-600">How Youtube works</h4>
                <h4 className="font-semibold text-xs  text-gray-600">Test new features</h4>
                <h5 className="font-semibold text-xs pt-2 text-gray-400">2024 Google LLC</h5>
            </div>
        </div>
    )
}
export default Navbar;