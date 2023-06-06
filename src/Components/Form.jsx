import { useState } from 'react';

export function Form(props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  function validateEmail(email) {
    let regexExpression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (regexExpression.test(email)) {
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <form method="post" onSubmit={props.handleSubmit}>
      <label htmlFor="emailInput">
        Email address
        <span className={error ? 'email-error' : 'display-none email-error'}>
          Valid email required
        </span>
        <input
          className={error ? "inputError inputPrimary" : "inputPrimary"}
          name="emailInput"
          type="email"
          placeholder="email@company.com"
          onChange={(e) => validateEmail(e.target.value)}
        />
      </label>
      <button className="btn btn-primary" type="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
