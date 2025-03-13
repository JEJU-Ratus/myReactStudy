// Tab 메뉴

// Hooks
import { useState } from "react";
// Components
import TabButton from "./TabButton";
// Data
import { EXAMPLES } from "../data-with-examples";

export default function Examples() {
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
      </menu>
      {tabViewContent}
    </section>
  );
}

/* <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
    <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
    <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
    <TabButton onSelect={() => handleSelect('State')}>State</TabButton> */

/* {!tabContent ? <p>Please select a topic.</p> :(
    <div id="tab-content">
    <h3>{EXAMPLES[tabContent].title}</h3>
    <p>{EXAMPLES[tabContent].description}</p>
    <pre>
        <code>{EXAMPLES[tabContent].code}</code>
    </pre>
    </div>
    )} */
