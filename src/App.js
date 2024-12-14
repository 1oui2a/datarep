import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import ReadAlbum from './components/readalbum';
import CreateAlbum from './components/createalbum';
import EditAlbum from './components/editalbum';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
      <Route path="/" element={<ReadAlbum />} />

        <Route path="/readalbum" element={<ReadAlbum />} />
        <Route path="/createalbum" element={<CreateAlbum />} />
        <Route path="/editalbum/:id" element={<EditAlbum />}/>
      </Routes>
    </Router>
  );
}

export default App;