import Footer from "./Footer";
import Menu from "./Menu";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const PageLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Nav />

      <Menu />
      <div className="content-wrapper">
        <div
          className="container-fluid p-2"
          style={{ height: "calc(100vh - 114px )" }}
        >
          {children}
        </div>
      </div>

      <Sidebar />

      <Footer />
    </div>
  );
};
export default PageLayout;
