import { Route, Routes } from "react-router-dom";
import PopularStoriesMain from "./sections/PopularStories/PopularStories";
function App() {
  return (
    <>
      <Routes>
        <Route path="auth" element={""}>
          <Route path="login" element={""} />
          <Route path="register" element={""} />
        </Route>
        <Route path="/" element={<PopularStoriesMain></PopularStoriesMain>} />
        <Route path="stories" element={""}>
          <Route path=":storyNumber" element={""} />
        </Route>
        <Route path="travellers" element={""} />
        <Route path="traveller" element={""} />
        <Route path="profile" element={""} />
        <Route path="new-story" element={""} />
      </Routes>
    </>
  );
}

export default App;
