import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TableItem from "./TableItem";

const TableBody: FC = () => {
  const countries = useSelector((state: RootState) => state.table.countries);

  if (countries.length < 1) {
    return (
      <tbody className="table-body">
        <tr className="message-row">
          <td colSpan={6}>No data to display :(</td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="table-body">
      {countries.map((country) => (
        <TableItem key={country.id} data={country} />
      ))}
    </tbody>
  );
};

export default TableBody;
