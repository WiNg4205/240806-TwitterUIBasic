import { useState } from "react"

const Feed = () => {
  const [selected, setSelected] = useState('For you')
  const changeSelected = (option) => {
    setSelected(option)
  }
  return (
    <div className="border-x border-borderGray w-[600px]">
      <div className="text-zinc-500 border-b border-borderGray flex flex-row justify-between items-stretch h-14 font-semibold">
        <div className="flex-1 flex justify-center hover:bg-zinc-900" onClick={() => changeSelected("For you")}>
          <div className={`py-4 ${selected === 'For you' ? 'border-b-4 border-xBlue text-white font-bold' : ''}`}>For you</div>
        </div>
        <div className="flex-1 flex justify-center hover:bg-zinc-900" onClick={() => changeSelected("Following")}>
          <div className={`py-4 ${selected === 'Following' ? 'border-b-4 border-xBlue text-white font-bold' : ''}`} >Following</div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Feed
