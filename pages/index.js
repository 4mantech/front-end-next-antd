import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

const Home = () => {

  return (
    <Layout className="layout">
      <style jsx>
        {`
          .site-layout-content {
            min-height: 280px;
            padding: 24px;
            background: #fff;
          }
          #components-layout-demo-top .logo {
            float: left;
            width: 120px;
            height: 31px;
            margin: 16px 24px 16px 0;
            background: rgba(255, 255, 255, 0.3);
          }
          .ant-row-rtl #components-layout-demo-top .logo {
            float: right;
            margin: 16px 0 16px 24px;
          }
        `}
      </style>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
    </Layout>
  );
};

export default Home;
