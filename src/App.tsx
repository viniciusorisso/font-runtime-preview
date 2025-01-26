import './App.css'
import FormFont from './components/form'
import FontPreview from './components/preview'

function App() {
  return (
    <>
      <div className="main-container">
        <section className="left">
          <FormFont />
        </section>
        <section className="right">
          <FontPreview />
        </section>
      </div>
    </>
  )
}

export default App
