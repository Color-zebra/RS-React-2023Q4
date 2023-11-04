type Props = {
  limit: number;
  setLimit: (pageSize: number) => void;
};
export const Dropdown = (props: Props) => {
  const { limit, setLimit } = props;

  return (
    <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
      <option value="6">6</option>
      <option value="12">12</option>
      <option value="18">18</option>
      <option value="24">24</option>
    </select>
  );
};
