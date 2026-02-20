import FragmentLayout from './FragmentLayout';
import './App.css';
import ItemList from './ItemList';
import CombinedComponents from './CombinedComponent';

function App() {
  return (
    <div className="app">
      <section>
        <FragmentLayout />
      </section>
      <hr />
      <section>
        <h2>Task 2: Item List</h2>
        <ItemList />
      </section>
      <hr />
      <section>
        <CombinedComponents />
      </section>
    </div>
  );
}

export default App;