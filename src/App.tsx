import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllTravelersPage from "./pages/AllTravelersPage";


function App() {
  return (
    <Routes>
      <Route path="auth">
        <Route path="login" element={""} />
        <Route path="register" element={""} />
      </Route>

      <Route path="/" element={<Home />}>
        <Route path="stories">
          <Route path=":storyNumber" element={""} />
        </Route>

       
        <Route path="travellers" element={<AllTravelersPage />} />

      

        <Route path="traveller" element={""} />
        <Route path="profile" element={""} />
        <Route path="new-story" element={""} />
      </Route>
    </Routes>
  );
}

export default App;
