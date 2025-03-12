import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";

function CoreConcept({image,description,title}) {
  return (
    <li>
      <img src={image} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((concept,index) => (
              <CoreConcept
              key ={index}
              {...concept}
              />)
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
