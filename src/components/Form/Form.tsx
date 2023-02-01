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
        <p>Add a country</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values, { resetForm }) => {
          const formattedValues = {
            ...values,
            golden: Number(values.golden),
            silver: Number(values.silver),
            bronze: Number(values.bronze),
          };

          dispatch(addCountry(formattedValues));
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form className="form">
            <div className="input-wrapper">
              <label htmlFor="country-input">Country name</label>
              <input
                id="country-input"
                name="country"
                value={values.country}
                onChange={handleChange}
                placeholder="Poland"
              />
            </div>
            <div className="medals-inputs-wrapper">
              <div className="input-wrapper">
                <label htmlFor="golden-medals-input">Golden</label>
                <input
                  id="golden-medals-input"
                  name="golden"
                  value={values.golden}
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="silver-medals-input">Silver</label>
                <input
                  id="silver-medals-input"
                  name="silver"
                  value={values.silver}
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="bronze-medals-input">Bronze</label>
                <input
                  id="bronze-medals-input"
                  name="bronze"
                  value={values.bronze}
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>
            </div>
            <button type="submit">ADD</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CountryForm;
