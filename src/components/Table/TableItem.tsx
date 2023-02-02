import { FC } from "react";
import { useDispatch } from "react-redux";
import { Country, openModal, removeCountry } from "../../store/tableSlice";

const TableItem: FC<{ data: Country; index: number }> = ({ data, index }) => {
  const dispatch = useDispatch();

  const handleButtonClick = (id: string) => {
    dispatch(removeCountry({ id }));
  };

  return (
    <tr onClick={() => dispatch(openModal({ country: data }))}>
      <td>{index + 1}.</td>
      <td>{data.country}</td>
      <td>{data.golden}</td>
      <td>{data.silver}</td>
      <td>{data.bronze}</td>
      <td>{data.total}</td>
      {/* <td>
        <button
          className="row-button"
          type="button"
          aria-label="Action button"
          onClick={() => handleButtonClick(data.id)}
        >
          X
        </button>
      </td> */}
    </tr>
  );
};

export default TableItem;
