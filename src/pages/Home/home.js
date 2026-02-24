import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import "./home.css"

export const Home = () => {

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact")
           .then(res => res.data.fact)
  })

  return (
    <div className="home-container">
      <h1>🐱 Random Cat Fact</h1>

      <div className="fact-box">
        {isLoading && "Loading..."}
        {error && "Something went wrong 😢"}
        {data && data}
      </div>

      <button onClick={refetch}>
        Get Cat Fact
      </button>
    </div>
  )
}