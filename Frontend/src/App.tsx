import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
// import Login from "./pages/Login";
import Workshop from "./pages/Workshop";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import AccountRegisterForm from "./components/organisms/AccountRegisterForm";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import LoginForm from "./pages/LoginForm";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layout/DashboardLayout";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import EventIndex from "./pages/dashboard/event/EventIndex";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";
import EventCreate from "./pages/dashboard/event/EventCreate";
import BiodataIndex from "./pages/dashboard/biodata/BiodataIndex";
import CategoryEdit from "./pages/dashboard/category/CategoryEdit";
import EventEdit from "./pages/dashboard/event/EventEdit";
import PembicaraEdit from "./pages/dashboard/pembicara/PembicaraEdit";


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        {/* website */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/workshop" element={<Workshop />} />
        </Route>

        {/* login form */}
        <Route element={<AuthLayout />}>
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/register" element={<AccountRegisterForm />} />
        </Route>


        {/* haleman yang hanya bisa diakses jika sudah login */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardIndex />} />

            <Route path="/dashboard/biodata" element={<BiodataIndex />} />
            
            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route path="/dashboard/category/create" element={<CategoryCreate />} />
            <Route path="/dashboard/category/edit/:id"element={<CategoryEdit />}/>

            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate />} />
            <Route path="/dashboard/pembicara/edit/:id" element={<PembicaraEdit />}/>

            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route path="/dashboard/event/create" element={<EventCreate />} />
            <Route path="/dashboard/event/edit/:id" element={<EventEdit />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;