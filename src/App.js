import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth-pages/Login';
import Signup from './pages/auth-pages/Signup';
import NoPage from './pages/error-page/NoPage';
import Layout from './pages/dashboard/Layout';
import UserDetails from './pages/users/UserDetails';
import Users from './pages/users/Users';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Users />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
        {/* <Route path="/edit-user/:id" element={<UserDetails />} /> */}
      </Route>

      {/* <Route path="/" element={<Users />} /> */}

      <Route path="*" element={<NoPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  );
}

export default App;
