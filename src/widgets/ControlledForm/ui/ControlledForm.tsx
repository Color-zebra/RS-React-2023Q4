import { useForm } from 'react-hook-form';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/store/hooks/hooks';
import { AutocompleteInput } from '../../../shared/ui/AutocompleteInput';
import s from './ControlledForm.module.scss';
import { FormType } from '../../../shared/types/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../shared/validation/schema';
import { initialValues } from '../../../shared/constants/initialValues';
import { TextInput } from '../../../shared/ui/TextInput/TextInput';
import { NumberInput } from '../../../shared/ui/NumberInput/NumberInput';
import { SelectInput } from '../../../shared/ui/SelectInput/SelectInput';
import { CheckBoxInput } from '../../../shared/ui/CheckBoxInput/CheckBoxInput';
import { FileInput } from '../../../shared/ui/FileInput/FileInput';
import { Button } from '../../../shared/ui/Button/Button';
import { base64Code } from '../../../shared/utils/Base64';
import { addForm } from '../../../shared/store/slices/formDataSlice';
import { useNavigate } from 'react-router-dom';

export const ControlledForm = () => {
  const countries = useAppSelector((store) => store.CountriesReducer.countries);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<FormType>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const { register, handleSubmit, setValue, formState, trigger } = form;
  const { errors, isDirty, isValid } = formState;
  const isFormValid = !(!isDirty || !isValid);

  const onSubmit = async (data: FormType) => {
    const dataForSubmit = { ...data, image: await base64Code(data.image!) };
    dispatch(addForm(dataForSubmit));
    navigate('/');
  };
  return (
    <form className={s['form']} onSubmit={handleSubmit(onSubmit)}>
      <h3>Controlled form (React hook forms)</h3>
      <TextInput
        label="Username"
        name="name"
        placeholder="username"
        register={register}
        error={errors.name}
      />
      <TextInput
        label="Email"
        name="email"
        placeholder="email"
        register={register}
        error={errors.email}
      />
      <NumberInput
        label="Age"
        name="age"
        placeholder="age"
        error={errors.age}
        register={register}
      />
      <TextInput
        label="Password"
        name="password"
        placeholder="password"
        register={register}
        error={errors.password}
        onChangeAdditional={() => trigger('repeatPassword')}
      />
      <TextInput
        label="Repeat password"
        name="repeatPassword"
        placeholder="password"
        register={register}
        error={errors.repeatPassword}
      />
      <SelectInput
        label="Gender"
        name="gender"
        placeholder="gender"
        error={errors.gender}
        register={register}
      />
      <CheckBoxInput
        label="Accept T & C"
        name="acceptTermsAndConditions"
        error={errors.acceptTermsAndConditions}
        register={register}
      />
      <AutocompleteInput
        name="country"
        label="Country"
        register={register}
        autocompleteList={countries}
        setValue={setValue}
        error={errors.country}
      />
      <FileInput name="image" error={errors.image} register={register} />
      <Button disabled={!isFormValid} name="Submit" type="submit" />
    </form>
  );
};
