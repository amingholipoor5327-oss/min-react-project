import { useState } from "react"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import "./search.css"

export const Search = () => {

  const [search, setSearch] = useState("")

  const { data, isLoading, error } = useQuery({
    queryKey: ["search", search],
    queryFn: () =>
      axios.get("https://catfact.ninja/facts?limit=10")
           .then(res => res.data.data),
    enabled: !!search   
  })

  const filteredData = data?.filter(item =>
    item.fact.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="search-container">

      <h1>🔎 Search Cat Facts</h1>

      <input
        type="text"
        placeholder="Search something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}

      <div className="results">
        {filteredData?.map((item, index) => (
          <div key={index} className="result-card">
            {item.fact}
          </div>
        ))}
      </div>

    </div>
  )
}