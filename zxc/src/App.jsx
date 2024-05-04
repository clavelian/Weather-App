
import './App.css'
// import Hello from './HelloWorld'
// import LampDemo from './components/ui/lamp'
// import BackgroundGradientDemo from './components/ui/BackgroundGradientDemo'
import SparklesPreview from './pages/SparklesDemo'
import BackgroundBeamsDemo from './pages/BackgroundBeamsDemo'

function App() {


  return (
    <>
    <SparklesPreview>
      {/* <Hello />  */}
      {/* <LampDemo /> */}
      {/* <BackgroundGradientDemo /> */}

      </SparklesPreview>
      <div>
          <input
            type="text"
            placeholder="Type a city"
            id="City"
            className="appearance-none border-2 bg-slate-200 w-72 mt-4 px-2 mx-3 text-black"
          />
          <button type="submit" className="border-2 rounded-md">
            Submit
          </button>
        </div>

        <BackgroundBeamsDemo />
    </>
  )
}

export default App
