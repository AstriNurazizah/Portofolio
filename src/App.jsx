import { Routes, Route } from 'react-router-dom';
import Main from './components/main';
import ProjectAll from './components/ProjectAll'; 
import BlogAll from './components/BlogAll'; 
import ProjectDetails from './components/ProjectDetails'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projectall" element={<ProjectAll />} />
        <Route path="/blogall" element={<BlogAll />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;