import { useEffect, useState } from "react"

function ArtList() {
    const [artList, setArtList ] = useState([])
    const baseURL = "https://boolean-uk-api-server.fly.dev/"

     useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then(res => res.json())
      .then(data => {
        setArtList(data)});
  }, []);

  return (
    <section>
      <div className="scroll-container">
        {artList.length > 0 ? (
          artList.map((art) => (
            <div key={art.id}>
              <h3>{art.title}</h3>
              <p>{art.artist}</p>
              <p> {art.publicationHistory}</p>
              <img src={baseURL + art.imageURL} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  )
}

export default ArtList
