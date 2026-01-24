// App.jsx
// Главный компонент с композицией Section, Card и ProductList

import Card from './Card';
import ProductList from './ProductList';
import Section from './Section';

function App() {
  return (
    <div className="app">
      {/* Task 3: Композиция Section с ProductList */}
      <Section title="Products">
        <ProductList />
      </Section>

      <hr />

      {/* Task 1: Демонстрация двух инстанций Card */}
      <Section title="Card Examples">
        <>
          <Card title="First Card" className="highlight">
            <p>This is the first card with custom styling.</p>
            <p>It demonstrates dynamic title and className props.</p>
          </Card>

          <Card title="Second Card">
            <p>This is the second card with default styling.</p>
            <p>Both cards use the same reusable Card component.</p>
          </Card>
        </>
      </Section>
    </div>
  );
}

export default App;
