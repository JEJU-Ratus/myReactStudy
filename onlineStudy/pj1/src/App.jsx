import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "core"];

// function getRandomInt(max){
//   return Math.floor(Math.random()* (max + 1));
// }'
const getRandomInt = (max) => Math.floor(Math.random() * (max + 1));

// 컴포넌트

function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.description} />
      <h3>{props.title}</h3>
      <p>Description</p>
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
            <CoreConcept title="Components" description="ABC" image={componentsImg} />
            <CoreConcept title="" />
            <CoreConcept title="" />
            <CoreConcept title="" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
