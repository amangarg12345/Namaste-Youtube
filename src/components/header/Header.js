import CenterSearchBarButton from "./CenterSearchBarButton";
import LeftSideIconNavButton from "./LeftSideIconNavButton";
import RightSideUserNotification from "./RightSideUserNotification";

const Header = () =>{
    return(
        <div className="h-14 w-full bg-white flex flex-wrap">
            <LeftSideIconNavButton/>
            <CenterSearchBarButton/>
            <RightSideUserNotification/>
        </div>
    )
}
export default Header;