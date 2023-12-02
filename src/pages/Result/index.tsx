import { Link } from 'react-router-dom';
import { useAppSelector } from '../../shared/store/hooks/hooks';
import { AutocompleteInput } from '../../shared/ui/AutocompleteInput';
import { countries } from '../../shared/constants/countries';

export const Result = () => {
  useAppSelector((store) => {
    console.log(store.FormReducer.formData);
  });
  return (
    <div>
      <h1>There will be form result</h1>
      <Link to={'uncontrolled'}>Uncontrolled form</Link>
      <Link to={'controlled'}>controlled form</Link>
      <AutocompleteInput autocompleteList={countries} />
      <p>Some text</p>
    </div>
  );
};
