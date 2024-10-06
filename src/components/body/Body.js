import HomeBody from "./HomeBody";
import Navbar from "./Navbar";

const Body = () =>{
    return(
        <div className="flex">
            <Navbar/>
            <HomeBody/>
        </div>
    )
}
export default Body;