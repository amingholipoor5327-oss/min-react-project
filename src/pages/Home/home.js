import axios from "axios"
import { useEffect, useState } from "react"
import "./home.css"
export const Home = ()=>{

    const [data , setData ] = useState("")

    const getData = ()=>{
        axios.get("https://catfact.ninja/fact")
        .then((res)=>{
            setData(res.data.fact)
        })
    }

    useEffect(()=>{
        getData()
    }, [])

return (
  <div className="home-container">
    <h1>🐱 Random Cat Fact</h1>

    <div className="fact-box">
      {data ? data : "Click the button to get a fact"}
    </div>

    <button onClick={getData}>
      Get Cat Fact
    </button>
  </div>
);
}