import { Link } from 'react-router-dom';
import { useAppSelector } from '../../shared/store/hooks/hooks';

export const Result = () => {
  useAppSelector((store) => {
    console.log(store.FormReducer.formData);
  });
  return (
    <div>
      <h1>There will be form result</h1>
      <Link to={'uncontrolled'}>Uncontrolled form</Link>
      <Link to={'controlled'}>controlled form</Link>
    </div>
  );
};
