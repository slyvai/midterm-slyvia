
import LayoutApps from "./components/LayoutApp";
import "antd/dist/reset.css";
import "./styles/globals.css";

export default function App({ Component, pageProps }) {

  return (
    <LayoutApps>
    <Component
      {...pageProps}
    />
    </LayoutApps>
  );
}
