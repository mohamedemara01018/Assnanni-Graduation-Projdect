import { Route, Routes } from "react-router";
import PatientRegistration from "./pages/register-page/PatientRegistration";
import Registration from "./pages/register-page/Registration";
import DoctorRegistration from "./pages/register-page/DoctorRegistration";
import StudentRegistration from "./pages/register-page/StudentRegistration";
import ReceptionistRegistration from "./pages/register-page/ReceptionistRegistration";
<<<<<<< HEAD
import Login from "./pages/login-page/Login";
import Header from "./components/header/Header";
import Landing from "./pages/landing-page/Landing";
import Footer from "./components/footer/Footer";
import RegisterPage from "./pages/register-page-v2/RegisterPage";
import VerifyEmailPage from "./pages/verify-email-page/VerifyEmailPage";
import VerifyDoctorPage from "./pages/verify-doctor-page/VerifyDoctorPage";
=======

import Login from "./pages/login-page/Login";
import BrowseDoctors from "./components/HomePage/BrowseDoctors";
import HomePage from "./routers/Home Page/HomePage";
import PatientDashboard from "./components/Patient/Dashboard/PatientDashboard";
>>>>>>> 421f24564a048338dbc9480e13330d0eed601924

const App = () => {
  const isRegister = true;
  return (
<<<<<<< HEAD
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/verify-doctor" element={<VerifyDoctorPage />} />


          <Route path="/register" element={<Registration />}>
            <Route index path="patient-register" element={<PatientRegistration />} />
            <Route path="doctor-register" element={<DoctorRegistration />} />
            <Route path="student-register" element={<StudentRegistration />} />
            <Route path="receptionist-register" element={<ReceptionistRegistration />} />
          </Route>
        </Routes>
      </main>

      <Footer />
=======
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
>>>>>>> 421f24564a048338dbc9480e13330d0eed601924
    </div>
  );
};

export default App;
