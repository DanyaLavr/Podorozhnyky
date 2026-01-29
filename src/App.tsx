import { Outlet, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import Profile from "./pages/Profile";
import ProfileUserPosts from "./pages/ProfileUserPosts";

function App() {
  return (
    <>
      <Routes>
        <Route path="auth" element={""}>
          <Route path="login" element={""} />
          <Route path="register" element={""} />
        </Route>
        <Route path="/" element={""}>
          <Route path="stories" element={""}>
            <Route path=":storyNumber" element={""} />
          </Route>
          <Route path="travellers" element={""} />
          {/* <Route path="traveller" element={<Outlet />}>
            <Route path=":travellerUid" element={<UserPage />} />
          </Route> */}
          <Route path="traveller/:travellerUid" element={<UserPage />} />
          <Route path="profile" element={<Profile />}>
            <Route path="favorite" element={""} />
            <Route path="user-posts" element={<ProfileUserPosts />} />
          </Route>
          <Route path="new-story" element={""} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
