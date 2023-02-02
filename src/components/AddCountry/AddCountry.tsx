import { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCountry } from "../../store/tableSlice";
import Input from "../Input/Input";
import "./AddCountry.scss";

const FormSchema = Yup.object().shape({
  country: Yup.string()
    .min(3, "Too short!")
    .required("Country name is Required!"),
  golden: Yup.number(),
  silver: Yup.number(),
  bronze: Yup.number(),
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
          const golden = Math.floor(Number(values.golden)) || 0;
          const silver = Math.floor(Number(values.silver)) || 0;
          const bronze = Math.floor(Number(values.bronze)) || 0;

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
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form className="form">
            <Input
              id="country-input"
              label="Country name"
              name="country"
              value={values.country}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="China"
              error={touched.country ? errors.country : undefined}
            />
            <div className="medals-inputs-wrapper">
              <Input
                id="golden-medals-input"
                label="Gold"
                name="golden"
                value={values.golden}
                handleChange={handleChange}
                handleBlur={handleBlur}
                placeholder="0"
                error={errors.golden && "Numbers only!"}
              />
              <Input
                id="silver-medals-input"
                label="Silver"
                name="silver"
                value={values.silver}
                handleChange={handleChange}
                handleBlur={handleBlur}
                placeholder="0"
                error={errors.silver && "Numbers only!"}
              />
              <Input
                id="bronze-medals-input"
                label="Bronze"
                name="bronze"
                value={values.bronze}
                handleChange={handleChange}
                handleBlur={handleBlur}
                placeholder="0"
                error={errors.bronze && "Numbers only!"}
              />
            </div>
            <button
              type="submit"
              disabled={
                Object.entries(errors).length !== 0 ||
                Object.entries(touched).length === 0
              }
            >
              ADD
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCountry;
