// Hooks
import { useState } from "react";
// Data
import { EXAMPLES } from "./data-with-examples.js";
// Components
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import CoreConcepts from "./components/coreConcepts.jsx";

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
    <>
      <Header />
      <main>
        <CoreConcepts />
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
    </>
  );
}

export default App;
