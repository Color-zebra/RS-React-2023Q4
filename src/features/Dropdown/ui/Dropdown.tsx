import classes from './Dropdown.module.scss';

type Props = {
  limit: number;
  setLimit: (pageSize: number) => void;
};
export const Dropdown = (props: Props) => {
  const { limit, setLimit } = props;

  return (
    <div className={classes.wrapper}>
      <h3>Elements per page</h3>
      <select
        className={classes.dropdown}
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      >
        <option className={classes.item} value="6">
          6
        </option>
        <option className={classes.item} value="12">
          12
        </option>
        <option className={classes.item} value="18">
          18
        </option>
        <option className={classes.item} value="24">
          24
        </option>
      </select>
    </div>
  );
};
