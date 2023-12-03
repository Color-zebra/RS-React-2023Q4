import { Link } from 'react-router-dom';
import { UncontrolledForm } from '../../widgets/UncontrolledForm';
import s from './Uncontrolled.module.scss';

export const Uncontrolled = () => {
  return (
    <div className={s['wrapper']}>
      <Link to={'/'}>Main page</Link>
      <UncontrolledForm />
    </div>
  );
};
