import "./App.css";
import Header from "../components/Header/Header.tsx";
import Home from "../pages/Home/Home.tsx";
import InfoPage from "../pages/InfoPage/InfoPage.tsx";
import Filter from "@/components/Filter/Filter.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="info/:id" element={<InfoPage />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <div>
          <Header />
          <Filter />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
