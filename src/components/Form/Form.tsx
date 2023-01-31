import { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCountry } from "../../store/tableSlice";
import "./Form.scss";

const FormSchema = Yup.object().shape({
  country: Yup.string()
    .min(3, "Too short!")
    .required("Country name is Required!"),
  golden: Yup.string(),
  silver: Yup.string(),
  bronze: Yup.string(),
});

const initialValues = {
  country: "",
  golden: "",
  silver: "",
  bronze: "",
};

const CountryForm: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="form-wrapper">
      <div className="title-wrapper">
        <p>Add country</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          const formattedValues = {
            ...values,
            golden: Number(values.golden),
            silver: Number(values.silver),
            bronze: Number(values.bronze),
          };

          dispatch(addCountry(formattedValues));
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <input
              name="country"
              value={values.country}
              onChange={handleChange}
              placeholder="Poland"
            />
            <input
              name="golden"
              value={values.golden}
              onChange={handleChange}
              placeholder="0"
            />
            <input
              name="silver"
              value={values.silver}
              onChange={handleChange}
              placeholder="0"
            />
            <input
              name="bronze"
              value={values.bronze}
              onChange={handleChange}
              placeholder="0"
            />
            <button type="submit">Add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CountryForm;
