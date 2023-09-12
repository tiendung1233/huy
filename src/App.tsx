import { useState } from 'react'
import Jobs from './Jobs'
import JobDetails from './JobDetails';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Jobs />} />
        <Route path="JobDetails" element={<JobDetails />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
