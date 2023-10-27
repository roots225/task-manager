import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
// import NoMatch from "../pages/NoMatch";

function Router() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />

      <Route index path="/login" element={<Home />} />
      <Route index path="/register" element={<Home />} />

      <Route path="/app" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="create" element={<Dashboard />} />
      </Route>

      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default Router;
