import "antd/dist/antd.css";
import "../styles/globals.css";
import Head from "../component/header";
import Buttombar from "../component/footer";
import { useRouter } from "next/router";
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      <Head />
      <Component {...pageProps} />
      <Buttombar/>
    </>
  );
};

export default MyApp;
