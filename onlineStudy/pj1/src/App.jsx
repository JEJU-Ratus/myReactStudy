// Components
import Examples from "./components/Examples.jsx";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/coreConcepts.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
