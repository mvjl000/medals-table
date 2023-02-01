import { FC } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "./Table.scss";

const Table: FC = () => {
  return (
    <table className="table">
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
