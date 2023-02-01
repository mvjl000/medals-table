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

    // Default olympic ordering.
    // Takes into account the hierarchy of medals:
    // gold > silver > bronze
    // E.g. - one gold medal is worth more
    // than any number of silver and bronze medals combined.
    if (orderingKey === "default") {
      if (b.golden - a.golden > 0) return 1;
      if (b.golden - a.golden < 0) return -1;
      if (b.golden - a.golden === 0) {
        // Same amout of gold medals. Compare silver.
        if (b.silver - a.silver > 0) return 1;
        if (b.silver - a.silver < 0) return -1;
        if (b.silver - a.silver === 0) {
          // Same amount of silver medals. Compare bronze.
          if (b.bronze - a.bronze > 0) return 1;
          if (b.bronze - a.bronze < 0) return -1;
          // Same amount of bronze. Item is equal.
          return 0;
        }
      }
      return 0;
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
      {sortedCountries.map((country, index) => (
        <TableItem key={country.id} data={country} index={index} />
      ))}
    </tbody>
  );
};

export default TableBody;
