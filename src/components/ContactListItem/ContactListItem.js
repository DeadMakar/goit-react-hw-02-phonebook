import { StyledContactListItem } from './ContactListItem.styled';
export const ContactListItem = ({ contact }) => {
  return (
    <StyledContactListItem>
      <p>
        {contact.name}: {contact.number}
      </p>
    </StyledContactListItem>
  );
};
