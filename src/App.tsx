import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="auth" element={""}>
          <Route path="login" element={""} />
          <Route path="register" element={""} />
        </Route>

        <Route path="/" element={<Home />}>
          <Route path="stories" element={""}>
            <Route path=":storyNumber" element={""} />
          </Route>
          <Route path="travellers" element={""} />
          <Route path="traveller" element={""} />
          <Route path="profile" element={""} />
          <Route path="new-story" element={""} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
