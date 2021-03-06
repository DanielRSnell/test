import Head from "next/head";
import { LocaleProvider } from "antd";
import { Layout, Row } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import Menu from "../menus/menu";

export default ({ title, sit, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/antd/3.6.4/antd.min.css"
      />
    </Head>
    <style jsx global>{`
      body {
        background: #eff2f4;
      }

      th {
        background: #001c2c !important;
        color: #eff2f4 !important;
      }

      td {
        background: #fff !important;
      }

      .menu-hover:hover {
        background: #1890ff !important;
      }
    `}</style>
    <LocaleProvider locale={enUS}>
      <Layout>
        <Menu sit={sit} />
        <Row style={{ margin: "1rem" }}>{children}</Row>
      </Layout>
    </LocaleProvider>
  </div>
);
