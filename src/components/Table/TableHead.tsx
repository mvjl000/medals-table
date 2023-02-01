import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeOrdering, Country } from "../../store/tableSlice";
import StMedal from "../../assets/1st-place-medal.svg";
import NdMedal from "../../assets/2nd-place-medal.svg";
import RdMedal from "../../assets/3rd-place-medal.svg";

const TableHead: FC = () => {
  const ordering = useSelector((state: RootState) => state.table.ordering);
  const dispatch = useDispatch();

  const handleChangeOrdering = (key: keyof Omit<Country, "id"> | "default") => {
    dispatch(
      changeOrdering({
        ordering: {
          key,
          type: ordering.type === "asc" ? "dsc" : "asc",
        },
      })
    );
  };

  return (
    <thead className="table-head">
      <tr>
        <th onClick={() => handleChangeOrdering("country")}>Country</th>
        <th onClick={() => handleChangeOrdering("golden")}>
          <div>
            <img src={StMedal} alt="1st place medal" />
            <span className="visually-hidden">1st place medals</span>
          </div>
        </th>
        <th onClick={() => handleChangeOrdering("silver")}>
          <div>
            <img src={NdMedal} alt="2nd place medal" />
            <span className="visually-hidden">2nd place medals</span>
          </div>
        </th>
        <th onClick={() => handleChangeOrdering("bronze")}>
          <div>
            <img src={RdMedal} alt="3rd place medal" />
            <span className="visually-hidden">3rd place medals</span>
          </div>
        </th>
        <th onClick={() => handleChangeOrdering("total")}>
          <div className="total-medals-wrapper">
            <img src={StMedal} alt="1st place medal" />
            <img src={NdMedal} alt="1st place medal" />
            <img src={RdMedal} alt="1st place medal" />
            <span className="visually-hidden">Medals total</span>
          </div>
        </th>
        <th>
          <button type="button" onClick={() => handleChangeOrdering("default")}>
            Default
          </button>
          <span className="visually-hidden">Actions</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
