const CenterSearchBarButton = () =>{
    return(
        <div className="w-2/4 flex">
            <input className="w-3/4 border rounded-l-full h-10 py-2 pl-6 my-2" type="text" placeholder="Search"/>
            <button className="border bg-gray-200 h-10 my-2 py-2 w-16 rounded-r-full items-center">🔍</button>
        </div>
    )

}
export default CenterSearchBarButton;