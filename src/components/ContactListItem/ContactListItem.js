export const ContactListItem = ({ contact }) => {
  return (
    <div>
      <p>
        {contact.name}: {contact.number}
      </p>
    </div>
  );
};
