import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import NavigationBar from './components/NavigationBar';
import Read from './components/read';
import Create from './components/create';
import Edit from './components/edit';

function App() {
  return (
    <Router>
      {/* <NavigationBar /> */}
      <Routes>
        <Route path="/readalbum" element={<ReadAlbum />} />
        <Route path="/createalbum" element={<CreateAlbum />} />
        <Route path="/editalbum/:id" element={<EditAlbum />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;