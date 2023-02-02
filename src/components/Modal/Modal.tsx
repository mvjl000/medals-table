import { Formik, Form } from "formik";
import { FC } from "react";
import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  closeModal,
  Country,
  editCountry,
  removeCountry,
} from "../../store/tableSlice";
import Input from "../Input/Input";
import "./Modal.scss";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderColor: "transparent",
    boxShadow: "0 0 8px 0px rgba(0, 0, 0, 0.3)",
    width: "90%",
    height: 320,
  },
  overlay: {
    zIndex: 100,
  },
};

const Modal: FC = () => {
  const clickedCountry = useSelector(
    (state: RootState) => state.table.clickedCountry
  );
  const dispatch = useDispatch();

  const handleDeleteCountry = () => {
    if (clickedCountry === undefined) return;

    dispatch(removeCountry({ id: clickedCountry.id }));
    dispatch(closeModal());
  };

  return (
    <ReactModal
      isOpen={!!clickedCountry}
      onRequestClose={() => dispatch(closeModal())}
      style={customModalStyles}
    >
      {clickedCountry !== undefined ? (
        <>
          <p className="modal-title">{clickedCountry.country}</p>
          <Formik
            initialValues={{
              golden: clickedCountry.golden,
              silver: clickedCountry.silver,
              bronze: clickedCountry.bronze,
            }}
            onSubmit={(values) => {
              const golden = Number(values.golden);
              const silver = Number(values.silver);
              const bronze = Number(values.bronze);

              const formattedValues: Country = {
                id: clickedCountry.id,
                country: clickedCountry.country,
                golden,
                silver,
                bronze,
                total: golden + silver + bronze,
              };

              dispatch(editCountry({ country: formattedValues }));
              dispatch(closeModal());
            }}
          >
            {({ values, handleChange }) => (
              <Form className="modal-form">
                <div className="medals-inputs-wrapper">
                  <Input
                    id="golden-medals-input-modal"
                    label="Gold"
                    name="golden"
                    value={values.golden}
                    handleChange={handleChange}
                    placeholder="0"
                  />
                  <Input
                    id="silver-medals-input-modal"
                    label="Silver"
                    name="silver"
                    value={values.silver}
                    handleChange={handleChange}
                    placeholder="0"
                  />
                  <Input
                    id="bronze-medals-input-modal"
                    label="Bronze"
                    name="bronze"
                    value={values.bronze}
                    handleChange={handleChange}
                    placeholder="0"
                  />
                </div>
                <div className="modal-buttons-wrapper">
                  <button
                    type="button"
                    className="danger"
                    onClick={handleDeleteCountry}
                    aria-label="Delete country"
                  >
                    DELETE
                  </button>
                  <button type="submit" aria-label="Save changes">
                    SAVE
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : null}
    </ReactModal>
  );
};

export default Modal;
