import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BlankPage from "./pages/BlankPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/explore" element={<BlankPage />} />
      <Route path="/notifications" element={<BlankPage />} />
      <Route path="/messages" element={<BlankPage />} />
      <Route path="/i/grok" element={<BlankPage />} />
      <Route path="/user/lists" element={<BlankPage />} />
      <Route path="/i/bookmarks" element={<BlankPage />} />
      <Route path="/user/communities/explore" element={<BlankPage />} />
      <Route path="/i/premium_sign_up" element={<BlankPage />} />
      <Route path="/i/verified-orgs-signup" element={<BlankPage />} />
      <Route path="/user" element={<BlankPage />} />
      {/* <Route path="/more" element={} /> */}
    </Routes>
  )
}

export default App
