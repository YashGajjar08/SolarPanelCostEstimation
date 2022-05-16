import NavBar from "./components/NavBar";
import FormComponent from "./components/FormComponent";
import Card from "./components/Card";
import bgVideo from './media/bgvideo.mp4';


function App() {
  return (
    <div className="video-container videoBg">
      <video autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="caption">
        <div>
          <NavBar />
          <FormComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
