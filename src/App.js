import './App.css';
import Body from './components/Body';
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import lake from "./image/lake.JPG";

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      <Header />
      <Body data={imageData} />
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
