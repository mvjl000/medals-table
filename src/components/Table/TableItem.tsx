import { FC, useMemo } from "react";
import { Country } from "../../store/tableSlice";

const TableItem: FC<{ data: Country }> = ({ data }) => {
  const { golden, silver, bronze } = data;

  const medalsSum = useMemo(() => golden + silver + bronze, []);

  const handleButtonClick = (id: string) => {
    console.log(id);
  };

  return (
    <tr>
      <td>{data.country}</td>
      <td>{golden}</td>
      <td>{silver}</td>
      <td>{bronze}</td>
      <td>{medalsSum}</td>
      <td>
        <button
          className="row-button"
          type="button"
          aria-label="Action button"
          onClick={() => handleButtonClick(data.id)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
