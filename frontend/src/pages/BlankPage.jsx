import SideBar from "../components/SideBar"
import EmptyContent from "../components/EmptyContent"
import Trending from "../components/Trending"

const BlankPage = ({ page }) => {
  return (
    <div className="flex justify-center bg-black">
      <SideBar />
      <EmptyContent />
      <Trending />
    </div>
  )
}

export default BlankPage
