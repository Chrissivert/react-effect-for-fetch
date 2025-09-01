function FavouriteAdviceList({ savedAdviceList, removeAdvice }) {
  if (savedAdviceList.length === 0) {
    return <p>No favorite advices saved.</p>
  }

  return (
    <section>
      <div className="scroll-container">
        <h2>Favorite Advices</h2>
        {savedAdviceList.map(advice => (
          <div
            key={advice.id}
            style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "0.5rem" }}
          >
            <p><strong>ID:</strong> {advice.id}</p>
            <p><strong>Advice:</strong> {advice.advice}</p>
            <button onClick={() => removeAdvice(advice.id)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FavouriteAdviceList
