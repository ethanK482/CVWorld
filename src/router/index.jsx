import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages";
import HomePage from "../pages/home";
import ChooseCV from "../pages/chooseCV";
import Resume from "../pages/cvEditor";
const RouterManagement = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/templates" element={<ChooseCV />}></Route>
        <Route path="/editor/:id" element={<Resume />}></Route>
      </Route>
    </Routes>
  );
};
export default RouterManagement;
