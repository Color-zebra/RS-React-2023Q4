import s from './Controlled.module.scss';
import { Link } from 'react-router-dom';
import { ControlledForm } from '../../../widgets/ControlledForm';

export const Controlled = () => {
  return (
    <div className={s['wrapper']}>
      <Link to={'/'}>Main page</Link>
      <ControlledForm />
    </div>
  );
};
