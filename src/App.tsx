import { Route, Routes } from "react-router";
import PatientRegistration from "./pages/register-page/PatientRegistration";
import Registration from "./pages/register-page/Registration";
import DoctorRegistration from "./pages/register-page/DoctorRegistration";
import StudentRegistration from "./pages/register-page/StudentRegistration";
import ReceptionistRegistration from "./pages/register-page/ReceptionistRegistration";

import Login from "./pages/login-page/Login";
import BrowseDoctors from "./components/HomePage/BrowseDoctors";
import HomePage from "./routers/Home Page/HomePage";
import PatientDashboard from "./components/Patient/Dashboard/PatientDashboard";

const App = () => {
  const isRegister = true;
  return (
    <div className={!isRegister ? "w-11/12" : "w-[95%] m-auto"}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<PatientDashboard />} />
          <Route path="/browse-doctors" element={<BrowseDoctors />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />}>
          <Route
            path="patient-register"
            index
            element={<PatientRegistration />}
          />
          <Route
            path="doctor-register"
            index
            element={<DoctorRegistration />}
          />
          <Route
            path="student-register"
            index
            element={<StudentRegistration />}
          />
          <Route
            path="receptionist-register"
            index
            element={<ReceptionistRegistration />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
