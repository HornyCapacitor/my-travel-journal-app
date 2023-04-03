import './App.css'
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import Data from "./Data.js"

function App() {

  const cards = Data.map(item => {
    return (
      <Card
        // key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section>
        {cards}
      </section>
    </div>
  )
}

export default App