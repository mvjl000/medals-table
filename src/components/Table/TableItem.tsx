import { FC } from "react";
import { useDispatch } from "react-redux";
import { Country, openModal } from "../../store/tableSlice";

const TableItem: FC<{ data: Country; index: number }> = ({ data, index }) => {
  const dispatch = useDispatch();

  return (
    <tr onClick={() => dispatch(openModal({ country: data }))}>
      <td>{index + 1}.</td>
      <td>{data.country}</td>
      <td>{data.golden}</td>
      <td>{data.silver}</td>
      <td>{data.bronze}</td>
      <td>{data.total}</td>
    </tr>
  );
};

export default TableItem;
