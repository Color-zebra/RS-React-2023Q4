import { Link } from 'react-router-dom';
import { UncontrolledForm } from '../../widgets/UncontrolledForm';

export const Uncontrolled = () => {
  return (
    <div>
      <h1>There will be form with uncontrolled input</h1>
      <Link to={'/'}>Main page</Link>
      <UncontrolledForm />
    </div>
  );
};
