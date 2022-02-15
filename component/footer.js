import { Layout } from "antd";
const { Footer } = Layout;

const Buttombar = () => {
  return (
    <Layout className="layout">
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Buttombar;
