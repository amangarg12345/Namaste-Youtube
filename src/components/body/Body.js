import HomeBody from "./HomeBody";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Body = () =>{
    return(
        <div className="flex">
            <Navbar/>
            <Outlet />
        </div>
    )
}
export default Body;