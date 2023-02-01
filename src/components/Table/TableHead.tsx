import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeOrdering, Country } from "../../store/tableSlice";
import StMedal from "../../assets/1st-place-medal.svg";
import NdMedal from "../../assets/2nd-place-medal.svg";
import RdMedal from "../../assets/3rd-place-medal.svg";
import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";

interface ColumnImage {
  src: string;
  alt: string;
}

interface Column {
  name: string;
  key: keyof Omit<Country, "id">;
  images: ColumnImage[] | undefined;
}

const columns: Column[] = [
  {
    name: "Country",
    key: "country",
    images: undefined,
  },
  {
    name: "1st place medal",
    key: "golden",
    images: [{ src: StMedal, alt: "1st place medal" }],
  },
  {
    name: "2nd place medal",
    key: "silver",
    images: [{ src: NdMedal, alt: "2nd place medal" }],
  },
  {
    name: "3rd place medal",
    key: "bronze",
    images: [{ src: RdMedal, alt: "3rd place medal" }],
  },
  {
    name: "Medals in total",
    key: "total",
    images: [
      { src: StMedal, alt: "1st place medal" },
      { src: NdMedal, alt: "2nd place medal" },
      { src: RdMedal, alt: "3rd place medal" },
    ],
  },
];

const TableHead: FC = () => {
  const ordering = useSelector((state: RootState) => state.table.ordering);
  const dispatch = useDispatch();

  const handleChangeOrdering = (key: keyof Omit<Country, "id"> | "default") => {
    // If user targets new column
    // it sets ordering type to descending
    if (ordering.key !== key)
      return dispatch(
        changeOrdering({
          ordering: {
            key,
            type: "dsc",
          },
        })
      );
    // If user targets already sorted
    // column, it sets ordering to ascending
    if (ordering.type === "dsc")
      return dispatch(
        changeOrdering({
          ordering: {
            key,
            type: "asc",
          },
        })
      );

    // At this point ordering is set
    // to asc, so it sets it back to
    // default olympic hierarchy
    return dispatch(
      changeOrdering({
        ordering: {
          key: "default",
          type: "dsc",
        },
      })
    );
  };

  return (
    <thead className="table-head">
      <tr>
        {columns.map((col) => (
          <th
            key={col.key}
            onClick={() => handleChangeOrdering(col.key)}
            colSpan={col.key === "country" ? 2 : 1}
          >
            {col.images !== undefined ? (
              <div
                className={`${
                  col.images.length > 1 ? "total-medals-wrapper" : ""
                }`}
              >
                {col.images.map((colImage, index) => (
                  <img key={index} src={colImage.src} alt={colImage.alt} />
                ))}
                <span className="visually-hidden">{col.name}</span>
              </div>
            ) : (
              col.name
            )}
            {ordering.key === col.key ? (
              <div className="ordering-info">
                <img src={ordering.type === "dsc" ? ArrowDown : ArrowUp} />
              </div>
            ) : null}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
