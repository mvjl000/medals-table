import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Country } from "../../store/tableSlice";
import TableItem from "./TableItem";

const TableBody: FC = () => {
  const { countries, ordering } = useSelector(
    (state: RootState) => state.table
  );

  if (countries.length < 1) {
    return (
      <tbody className="table-body">
        <tr className="message-row">
          <td colSpan={6}>No data to display :(</td>
        </tr>
      </tbody>
    );
  }

  const orderingFn = (a: Country, b: Country) => {
    const orderingKey = ordering.key;

    // Default olympic ordering
    if (orderingKey === "default") {
      return ordering.type === "asc" ? a.total - b.total : b.total - a.total;
    }

    // Alphabetical ordering
    if (orderingKey === "country" && ordering.type === "asc") {
      if (a.country < b.country) return -1;
      if (a.country > b.country) return 1;
      return 0;
    } else if (orderingKey === "country") {
      if (a.country > b.country) return -1;
      if (a.country < b.country) return 1;
      return 0;
    }

    return ordering.type === "asc"
      ? a[orderingKey] - b[orderingKey]
      : b[orderingKey] - a[orderingKey];
  };

  const sortedCountries = [...countries].sort(orderingFn);

  return (
    <tbody className="table-body">
      {sortedCountries.map((country) => (
        <TableItem key={country.id} data={country} />
      ))}
    </tbody>
  );
};

export default TableBody;
