import { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCountry } from "../../store/tableSlice";
import "./AddCountry.scss";
import Input from "../Input/Input";

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

const AddCountry: FC = () => {
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
          const golden = Number(values.golden);
          const silver = Number(values.silver);
          const bronze = Number(values.bronze);

          const formattedValues = {
            ...values,
            golden,
            silver,
            bronze,
            total: golden + silver + bronze,
          };

          dispatch(addCountry(formattedValues));
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form className="form">
            <Input
              id="country-input"
              label="Country name"
              name="country"
              value={values.country}
              handleChange={handleChange}
              placeholder="China"
            />
            <div className="medals-inputs-wrapper">
              <Input
                id="golden-medals-input"
                label="Gold"
                name="golden"
                value={values.golden}
                handleChange={handleChange}
                placeholder="0"
              />
              <Input
                id="silver-medals-input"
                label="Silver"
                name="silver"
                value={values.silver}
                handleChange={handleChange}
                placeholder="0"
              />
              <Input
                id="bronze-medals-input"
                label="Bronze"
                name="bronze"
                value={values.bronze}
                handleChange={handleChange}
                placeholder="0"
              />
            </div>
            <button type="submit">ADD</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCountry;
