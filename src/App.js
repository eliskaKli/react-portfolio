import { Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

import Profile from "./pages/Profile/Profile.js";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.js";


function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes> 
    </div>
  );
}

export default App;

