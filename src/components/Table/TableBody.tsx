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
      const goldenResult = b.golden - a.golden;
      // Same amount of gold medals, compare silver next.
      if (goldenResult === 0) {
        const silverResult = b.silver - a.silver;
        // Same amount of silver, compare bronze.
        if (silverResult === 0) return b.bronze - a.bronze;

        return silverResult;
      }

      return goldenResult;
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
