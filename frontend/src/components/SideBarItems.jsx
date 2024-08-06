import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"

const SideBarItems = ({ icon, label, link }) => {
  const location = useLocation()
  const isActive = location.pathname === link

  return (
    <Link className="flex items-center" to={link} >
      <div className="hover:bg-hoverGray hover:rounded-full flex items-center gap-3 py-3 pl-4 pr-6">
        <FontAwesomeIcon className="h-6 w-6" icon={icon} />
        <div className={`text-xl ${isActive ? "font-bold" : ""}`}>{label}</div>
      </div>
    </Link>
  )
}

export default SideBarItems;