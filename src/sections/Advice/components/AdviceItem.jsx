import { useEffect, useState } from "react"
import FavouriteAdviceList from "./FavouriteAdviceList"

function AdviceItem() {
  const [adviceItem, setAdvice] = useState(null)
  const [savedAdviceList, setSavedAdviceList] = useState(() => {
    const saved = localStorage.getItem("savedAdviceList")
    return saved ? JSON.parse(saved) : []
  })

  const fetchAdvice = () => {
    fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`) // date.now needed for unique identifaction and fix aggresive caching 
      .then(res => res.json())
      .then(data => setAdvice(data.slip))
      .catch(err => console.error(err))
  }

  const saveAdvice = () => {
  if (savedAdviceList.some(advice => advice.id === adviceItem.id)) {
    return
  }
  const updatedList = [...savedAdviceList, adviceItem]
  setSavedAdviceList(updatedList)
  localStorage.setItem("savedAdviceList", JSON.stringify(updatedList))
}

const removeAdvice = (id) => {
    const updatedList = savedAdviceList.filter(advice => advice.id !== id)
    setSavedAdviceList(updatedList)
    localStorage.setItem("savedAdviceList", JSON.stringify(updatedList))
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <section>
      <div className="scroll-container">
        {adviceItem ? (
          <div key={adviceItem.id}>
            <p>ID: {adviceItem.id}</p>
            <p>Advice: {adviceItem.advice}</p>
            <button onClick={fetchAdvice}>Give me a new advice!</button>
            <button onClick={saveAdvice}>Save this advice </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
          <FavouriteAdviceList savedAdviceList={savedAdviceList} removeAdvice={removeAdvice} />
      </div>
    </section>
  )
}

export default AdviceItem
