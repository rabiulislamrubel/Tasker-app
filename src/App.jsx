import { useState } from "react"
import HeroSection from "./components/HeroSection"
import Layout from "./components/Layout"
import TaskAddModal from "./components/TaskAddModal"
import TaskBoard from "./components/taskBoard/TaskBoard"



function App() {
  
  return (
    <>
      <div className="bg-[#191D26] font-[Inter] text-white">
        <Layout>
          <HeroSection/>
          <TaskBoard/>
        </Layout>
        
      </div>
      
    </>
  )
}

export default App 
