// Hooks
import { useState } from "react";
// Data
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data-with-examples.js";
// Components
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [tabContent, setTabContent] = useState("");

  function handleSelect(selectedButton) {
    // selectedButton => 'Components' , 'Jsx', 'Props', 'State' 중 하나
    setTabContent(selectedButton);
  }

  let tabViewContent = <p>Please select a topic.</p>;

  if (tabContent) {
    tabViewContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((key) => (
              <TabButton
                isSelected={tabContent === key}
                onSelect={() => handleSelect(key)}
                key={key}
              >
                {key}
              </TabButton>
            ))}
            {/* <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('State')}>State</TabButton> */}
          </menu>
          {tabViewContent}
          {/* {!tabContent ? <p>Please select a topic.</p> :(
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
            )} */}
        </section>
      </main>
    </div>
  );
}

export default App;
