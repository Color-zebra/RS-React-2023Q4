import s from './Button.module.scss';

type ButtonProps = {
  name: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean;
};

export const Button = ({ name, type, disabled }: ButtonProps) => {
  return (
    <button className={s['button']} disabled={disabled} type={type}>
      {name}
    </button>
  );
};
