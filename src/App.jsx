
import './App.css'
import { CoreConcepts } from './components/CoreConcepts.jsx';
import { Header } from './components/Header.jsx';
import {CORE_CONCEPTS} from './data.js'
import { TabButton } from './components/TabButton.jsx';
import {useState} from 'react';
import {EXAMPLES} from './data.js';
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  }

  return (
    <div>
      <header>
        <h1>Hello Wassup Hello Wassup</h1>
      </header>
      <Header />
      <main>
        <section id = "core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key ={conceptItem.title} {...conceptItem} />
              
            ))}
            {/* <CoreConcepts 
            {...CORE_CONCEPTS[0]}/>
            <CoreConcepts
            title = {CORE_CONCEPTS[1].title}
            description = {CORE_CONCEPTS[1].description} 
            image = {CORE_CONCEPTS[1].image}/>
            <CoreConcepts 
            {...CORE_CONCEPTS[2]}/>
            <CoreConcepts
            {...CORE_CONCEPTS[3]}/>  */}
          </ul> 
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick = {() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick = {() => handleClick('jsx')} >JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick = {() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick = {() => handleClick('state')} >State</TabButton>
          </menu>
          <div id= "tab-connect">
            {!selectedTopic ? (<p>Please select a topic</p>) : (
              <div>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;


