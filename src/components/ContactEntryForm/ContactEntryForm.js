import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { StyledForm, Error, Title } from './ContactEntryForm.styled';

export const ContactEntryForm = ({ onSubmit, contacts }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    number: Yup.number().required('Number is required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const normalizedName = values.name.toLowerCase();
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isNameExists) {
      alert(`Contact with name '${values.name}' already exists!`);
      return;
    }

    onSubmit({ ...values, id: nanoid() });
    resetForm();
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <Error name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <Field type="text" id="number" name="number" />
            <Error name="number" component="div" />
          </div>
          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    </>
  );
};
