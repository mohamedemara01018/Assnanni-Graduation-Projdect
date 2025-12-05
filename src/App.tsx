import { Route, Routes } from "react-router";
import PatientRegistration from "./Registration/PatientRegistration";
import Registration from "./Registration/Registration";
import DoctorRegistration from "./Registration/DoctorRegistration";
import StudentRegistration from "./Registration/StudentRegistration";
import ReceptionistRegistration from "./Registration/ReceptionistRegistration";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />}>
          <Route
            path="patient-registration"
            index
            element={<PatientRegistration />}
          />
          <Route
            path="doctor-registration"
            index
            element={<DoctorRegistration />}
          />
          <Route
            path="student-registration"
            index
            element={<StudentRegistration />}
          />
          <Route
            path="receptionist-registration"
            index
            element={<ReceptionistRegistration />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
