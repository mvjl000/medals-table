import { FC } from "react";
import { useDispatch } from "react-redux";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "./Table.scss";
import { clearData, loadDemoData } from "../../store/tableSlice";

const Table: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="buttons-wrapper">
        <button
          type="button"
          aria-label="Clear table"
          onClick={() => dispatch(clearData())}
        >
          Clear table
        </button>
        <button
          type="button"
          aria-label="Load demo data"
          onClick={() => dispatch(loadDemoData())}
        >
          Load demo data
        </button>
      </div>
      <table className="table">
        <TableHead />
        <TableBody />
      </table>
      <p className="table-info">
        This table sorts items by default according to the medal hierarchy (gold{" "}
        {">"} silver {">"} bronze), which means e.g. one gold medal is worth
        more than any number of silver and bronze medals combined. Click on one
        of column heads to change the sorting.
      </p>
    </>
  );
};

export default Table;
