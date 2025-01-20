import './App.css'
import FormFont from './components/form'
import FontPreview from './components/preview'

function App() {
  return (
    <>
      <div className="main-container">
        <section className="right">
          <FormFont />
        </section>
        <section className="left">
          <FontPreview />
        </section>
      </div>
    </>
  )
}

export default App
