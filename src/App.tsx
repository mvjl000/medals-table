import { FC } from "react";
import Form from "./components/Form/Form";
import Layout from "./components/Layout";
import Table from "./components/Table/Table";

const App: FC = () => {
  return (
    <Layout>
      <Table />
      <Form />
    </Layout>
  );
};

export default App;
