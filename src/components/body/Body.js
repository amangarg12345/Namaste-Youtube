import HomeBody from "./HomeBody";
import Navbar from "./Navbar";

const Body = () =>{
    return(
        <div className="flex flex-wrap">
            <Navbar/>
            <HomeBody/>
        </div>
    )
}
export default Body;