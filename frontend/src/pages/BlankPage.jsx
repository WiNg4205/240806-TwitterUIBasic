import SideBar from "../components/SideBar"
import Feed from "../components/Feed"
import Trending from "../components/Trending"

const BlankPage = ({ page }) => {
  return (
    <div className="flex justify-center bg-black">
      <SideBar />
      <Feed />
      <Trending />
    </div>
  )
}

export default BlankPage
