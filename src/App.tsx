import { FC } from "react";
import AddCountry from "./components/AddCountry/AddCountry";
import Layout from "./components/Layout";
import Table from "./components/Table/Table";
import ReactModal from "react-modal";
import Modal from "./components/Modal/Modal";

ReactModal.setAppElement("#root");

const App: FC = () => {
  return (
    <Layout>
      <Table />
      <AddCountry />
      <Modal />
    </Layout>
  );
};

export default App;
