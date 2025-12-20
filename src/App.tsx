import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CreateBlog } from "./pages/CreateBlog"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateBlog></CreateBlog>}></Route>
        <Route path="/create-blog" element={<CreateBlog></CreateBlog>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
