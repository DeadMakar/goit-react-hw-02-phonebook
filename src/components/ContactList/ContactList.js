import { ContactListItem } from '../ContactListItem/ContactListItem';
import {
  StyledContactList,
  StyledContactItem,
  StyledDeleteButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => (
        <StyledContactItem key={contact.id}>
          <ContactListItem contact={contact} />
          <StyledDeleteButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </StyledDeleteButton>
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};
