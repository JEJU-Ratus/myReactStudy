import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";


function App() {
  function handleSelect(selectedButton){
    // selectedButton => 'Components' , 'Jsx', 'Props', 'State' 중 하나
    console.log(selectedButton);
}

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
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
            </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
