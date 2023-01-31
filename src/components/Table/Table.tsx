import { FC } from "react";
import StMedal from "../../assets/1st-place-medal.svg";
import NdMedal from "../../assets/2nd-place-medal.svg";
import RdMedal from "../../assets/3rd-place-medal.svg";
import "./Table.scss";

const MOCK_DATA = [
  {
    country: "Poland",
    golden: 1,
    silver: 5,
    bronze: 8,
  },
  {
    country: "Germany",
    golden: 4,
    silver: 2,
    bronze: 1,
  },
  {
    country: "england",
    golden: 3,
    silver: 4,
    bronze: 4,
  },
  {
    country: "Spain",
    golden: 2,
    silver: 8,
    bronze: 3,
  },
];

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
      <tbody className="table-body">
        {MOCK_DATA.map(({ country, golden, silver, bronze }) => {
          const medalsSum = golden + silver + bronze;

          return (
            <tr>
              <td>{country}</td>
              <td>{golden}</td>
              <td>{silver}</td>
              <td>{bronze}</td>
              <td>{medalsSum}</td>
              <td>
                <button
                  className="row-button"
                  type="button"
                  aria-label="Action button"
                >
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
