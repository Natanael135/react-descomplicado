import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import AuthLayout from "./pages/layout/Auth";
import AppLayout from "./pages/layout/App";
import Schedules from "./pages/App/Schedules";
import NewSchedule from "./pages/App/NewSchedule";
import EditSchedule from "./pages/App/EditSchedule";

import "./styles.css";

function App() {
  return (
    <>
      <Toaster position="bottom-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>

          <Route path="/" element={<AppLayout />}>
            <Route path="schedules" element={<Schedules />} />
            <Route path="new-schedule" element={<NewSchedule />} />
            <Route
              path="edit-schedule/:scheduleId"
              element={<EditSchedule />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

