import './App.css'
import Hero from './components/Hero'
import Products from './components/Products'
import Quality from './components/Quality'
import Video from './components/Video'
import Thumb from './assets/vidThumb.png'
import Composition from './components/Composition'
import Services from './components/Services'
import TestimonialSlider from './components/TestimonailSlider'
import News from './components/News'

function App() {

  return (
    <>
    <Hero/>
    <Quality/>
    <Products/>
    <Video
    videoId="dQw4w9WgXcQ" // YouTube video ID
    thumbnailUrl={Thumb} // Custom thumbnail URL
    />
    <Composition/>
    <Services/>
    <TestimonialSlider />
    <News/>
    </>
  )
}

export default App
