import {
  Formik,
  Field,
  ErrorMessage,
  FormikValues,
  FormikHelpers,
} from "formik";
import basicFormSchema from "../../validation/basic-form-schema";
import "./BasicForm.css";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const BasicForm: React.FC = () => {
  console.log("BasicForm component has fired");

  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <div>
      <h1>Form Validation Example</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={basicFormSchema}
        onSubmit={handleSubmit}
      >
        <form>
          <label htmlFor="name">
            Name:
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </label>

          <label htmlFor="email">
            Email:
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </label>

          <label htmlFor="password">
            Password:
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </label>

          <label htmlFor="confirmPassword">
            Confirm Password:
            <Field type="password" name="confirmPassword" />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </label>
        </form>
      </Formik>
    </div>
  );
};

export default BasicForm;
