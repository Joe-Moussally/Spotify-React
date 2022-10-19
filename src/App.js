import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ArtistPage from "./pages/ArtistPage";

import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SearchPage />} />
        <Route path="/artists/:artistId" element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;