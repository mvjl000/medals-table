import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeOrdering, Country } from "../../store/tableSlice";
import StMedal from "../../assets/1st-place-medal.svg";
import NdMedal from "../../assets/2nd-place-medal.svg";
import RdMedal from "../../assets/3rd-place-medal.svg";

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
        {columns.map((col) => (
          <th key={col.key} onClick={() => handleChangeOrdering(col.key)}>
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
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
