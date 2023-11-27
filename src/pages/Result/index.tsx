import { Link } from 'react-router-dom';

export const Result = () => {
  return (
    <div>
      <h1>There will be form result</h1>
      <Link to={'uncontrolled'}>Uncontrolled form</Link>
      <Link to={'controlled'}>controlled form</Link>
    </div>
  );
};
