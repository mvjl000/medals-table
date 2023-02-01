import { FC } from "react";
import StMedal from "../../assets/1st-place-medal.svg";
import NdMedal from "../../assets/2nd-place-medal.svg";
import RdMedal from "../../assets/3rd-place-medal.svg";
import "./Table.scss";
import TableBody from "./TableBody";

const Table: FC = () => {
  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <th>Country</th>
          <th>
            <div>
              <img src={StMedal} alt="1st place medal" />
              <span className="visually-hidden">1st place medals</span>
            </div>
          </th>
          <th>
            <div>
              <img src={NdMedal} alt="2nd place medal" />
              <span className="visually-hidden">2nd place medals</span>
            </div>
          </th>
          <th>
            <div>
              <img src={RdMedal} alt="3rd place medal" />
              <span className="visually-hidden">3rd place medals</span>
            </div>
          </th>
          <th>
            <div className="total-medals-wrapper">
              <img src={StMedal} alt="1st place medal" />
              <img src={NdMedal} alt="1st place medal" />
              <img src={RdMedal} alt="1st place medal" />
              <span className="visually-hidden">Medals total</span>
            </div>
          </th>
          <th>
            <span className="visually-hidden">Actions</span>
          </th>
        </tr>
      </thead>
      <TableBody />
    </table>
  );
};

export default Table;
