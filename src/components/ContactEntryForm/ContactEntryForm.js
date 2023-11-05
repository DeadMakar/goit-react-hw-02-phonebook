import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const ContactEntryForm = ({ onSubmit, contacts }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Number is required'),
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <Field type="text" id="number" name="number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
