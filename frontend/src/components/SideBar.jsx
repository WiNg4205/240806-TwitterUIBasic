import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faMagnifyingGlass, faBell, faEnvelope, faMessage, faRectangleList, faBookmark, faUserGroup, faBoltLightning, faUser, faCommentDots, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import SideBarItems from './SideBarItems'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="w-72 text-white flex flex-col justify-between h-screen p-2">
      <div>
        <div className="flex flex-col">
          <Link to="/home">
            <FontAwesomeIcon className="h-6 w-6 hover:bg-hoverGray hover:rounded-full px-4 py-3" icon={faXTwitter} />
          </Link>
          <SideBarItems icon={faHouse} label="Home" link="/home" />
          <SideBarItems icon={faMagnifyingGlass} label="Explore" link="/explore" />
          <SideBarItems icon={faBell} label="Notifications" link="/notifications" />
          <SideBarItems icon={faEnvelope} label="Messages" link="/messages" />
          <SideBarItems icon={faMessage} label="Grok" link="/i/grok" />
          <SideBarItems icon={faRectangleList} label="Lists" link="/user/lists" />
          <SideBarItems icon={faBookmark} label="Bookmarks" link="/i/bookmarks" />
          <SideBarItems icon={faUserGroup} label="Communities" link="/user/communities/explore" />
          <SideBarItems icon={faXTwitter} label="Premium" link="/i/premium/sign_up" />
          <SideBarItems icon={faBoltLightning} label="Verified Orgs" link="i/verified-orgs-signup" />
          <SideBarItems icon={faUser} label="Profile" link="/user" />
          <SideBarItems icon={faCommentDots} label="More" />
        </div>
        <button className="bg-xBlue text-xl font-semibold w-11/12 p-3 rounded-full hover:opacity-90">Post</button>
      </div>

      <div className="flex items-center justify-between py-3 pl-2 pr-4 hover:bg-hoverGray hover:rounded-full">
        <div className="flex flex-row gap-4 items-center">
          <div className="bg-gray-300 h-10 w-10 flex items-center justify-center rounded-full">
            <FontAwesomeIcon className="text-gray-500 h-6 w-6"icon={faUser} />
          </div>
          <div className="">
            <div>User</div>
            <div>@User</div>          
          </div>          
        </div>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  )
}

export default SideBar
