export const SearchFilter = ({ value, onChange }) => (
  <div>
    <h2>Search contacts</h2>
    <input type="text" name="filter" value={value} onChange={onChange} />
  </div>
);
