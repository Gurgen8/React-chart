import React, { useEffect, useState } from 'react';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import Loading from "./helpers/LoadingProcess";


export default function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2500)
  })


  return (
    <>
    {loading?
      <div style={{ height: "100%" }} className="layout">
        <div >
          <Sidebar />
        </div >
        <Feed />
      </div>
      :<Loading/>}
    </>
  )
}
