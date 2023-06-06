import bgMobile from '../../assets/images/illustration-sign-up-mobile.svg';
import { List } from './List.jsx';
import { Form } from './Form.jsx';

export function Card(props) {
  return (
    <section className="card-container">
      <img src={bgMobile} alt="Illustration" />
      <div className="card-content">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <List />
        <Form handleSubmit={props.handleSubmit} />
      </div>
    </section>
  );
}
