import { StyledSearchFilter, ContactTitle } from './SearchFilter.styled';

export const SearchFilter = ({ value, onChange }) => (
  <>
    <ContactTitle>Contacts</ContactTitle>
    <StyledSearchFilter>
      <h2>Search contacts</h2>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </StyledSearchFilter>
  </>
);
