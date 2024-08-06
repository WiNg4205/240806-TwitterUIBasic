import Feed from "../components/Feed"
import SideBar from "../components/SideBar"
import Trending from "../components/Trending"

const HomePage = () => {
  return (
    <div className="flex justify-center bg-black h-screen w-screen">
      <SideBar />
      <Feed />
      <Trending />
    </div>
  )
}
  
export default HomePage
