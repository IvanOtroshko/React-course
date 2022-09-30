import { Route, Routes } from "react-router-dom";
import { Confirmation } from "../components/InfoTemplate/Confirmation";
import { Success } from "../components/InfoTemplate/Success";
import { ConfirmationForm } from "../pages/Confirmation";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { Registration } from "../pages/Registration";
import { SelectedPost } from "../pages/SelectedPost";
import { SuccesForm } from "../pages/Success";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/confirmation" element={<ConfirmationForm/>} />
      <Route path="/success" element={<SuccesForm/>} />
      <Route path="/selectedpost" element={<SelectedPost/>} />
    </Routes>
  );
};