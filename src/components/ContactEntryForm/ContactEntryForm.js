import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { StyledForm, Error, Title } from './ContactEntryForm.styled';

export const ContactEntryForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'Phone number must be in the format "000-00-00"'
      )
      .required('Number is required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const formatPhoneNumber = value => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length <= 6) {
      return phoneNumber.replace(/(\d{3})(\d{0,2})/, '$1-$2');
    } else {
      return phoneNumber.replace(/(\d{3})(\d{2})(\d{0,2})/, '$1-$2-$3');
    }
  };

  const handlePhoneChange = (e, setFieldValue) => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFieldValue('number', formattedValue);
  };

  const handleSubmit = (values, { resetForm }) => {
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
        {({ values, setFieldValue }) => (
          <StyledForm>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <Error name="name" component="div" />
            </div>
            <div>
              <label htmlFor="number">Number:</label>
              <Field
                type="text"
                id="number"
                name="number"
                onChange={e => handlePhoneChange(e, setFieldValue)}
                value={values.number}
              />
              <Error name="number" component="div" />
            </div>
            <button type="submit">Add contact</button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
