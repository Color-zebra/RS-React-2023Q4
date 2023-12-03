import { Link } from 'react-router-dom';
import { useAppSelector } from '../../shared/store/hooks/hooks';
import s from './Result.module.scss';
import { FormResult } from '../../entities/FormResult';

export const Result = () => {
  const forms = useAppSelector((store) => {
    console.log(store.FormReducer.forms);
    return store.FormReducer.forms;
  });
  return (
    <div className={s['wrapper']}>
      <h1>Results</h1>
      <div className={s['links']}>
        <Link to={'uncontrolled'}>Uncontrolled</Link>
        <Link to={'controlled'}>Controlled</Link>
      </div>
      <div className={s['result-wrapper']}>
        {forms.map((item) => (
          <FormResult
            key={item.password + item.country + item.age}
            {...item}
          ></FormResult>
        ))}
      </div>
    </div>
  );
};
