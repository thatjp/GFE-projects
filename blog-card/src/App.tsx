import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <div className="card-container">
        <Card 
          blogTopic="Interior" 
          blogTitle="Top 5 Living Room Inspirations"
          blogTextSnippet="Curated vibrants colors for your living, make it pop & calm in the same time."
          linkText="Read more"
        />
      </div>
    </>
  )
}

export default App
