import styles from "./App.module.css";

import Profile from "./components/Profile/Profile.js";
import ProjectPage from "./components/ProjectsPage/ProjectsPage";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Profile />}>
      <Route path="projects" element={<ProjectPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className={styles.app}>
      {/* <Profile /> */}
      <RouterProvider router={appRouter} />
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
