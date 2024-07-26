import Footer from "./Footer";
import Menu from "./Menu";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const PageLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Nav />

      <Menu />
      {children}
      <Sidebar />

      <Footer />
    </div>
  );
};
export default PageLayout;
