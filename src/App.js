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
      {/* <Profile /> */}
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
