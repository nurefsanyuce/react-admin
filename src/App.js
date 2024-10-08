import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import { Provider } from "react-redux";
import store from "./redux/store";
import Contact from "./pages/Contact";
import UserDetails from "./pages/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/user-details",
    element: <UserDetails />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
