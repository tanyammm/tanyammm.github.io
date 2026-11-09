import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Games from "./components/Games";
import Services from "./components/Services";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Games />
        <Services />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;