import { FC } from "react";
import { useDispatch } from "react-redux";
import { Country, removeCountry } from "../../store/tableSlice";

const TableItem: FC<{ data: Country }> = ({ data }) => {
  const dispatch = useDispatch();

  const handleButtonClick = (id: string) => {
    dispatch(removeCountry({ id }));
  };

  return (
    <tr>
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
