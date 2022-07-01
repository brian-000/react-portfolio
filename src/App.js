import './App.css';
import './index.css';
import Header from './components/Header';
import Projects from './components/Projects/projects';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
