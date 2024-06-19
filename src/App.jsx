
import './App.css'
import { Header } from './components/Header.jsx';
import { Examples } from './components/Examples.jsx';
import { CoreConcepts } from './components/CoreConcepts.jsx';
function App() {

  return (
    <div>
      <header>
        <h1>Hello Wassup Hello Wassup</h1>
      </header>
      <Header />
      <main>
        <CoreConcepts />
        <Examples/>
      </main>
    </div>
  );
}

export default App;


