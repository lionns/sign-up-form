import './App.scss';
import { Card } from './Components/Card.jsx';

export function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form send');
  }

  return (
    <main>
      <Card handleSubmit={handleSubmit} />
    </main>
  );
}
