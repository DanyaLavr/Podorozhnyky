import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import Profile from "./pages/Profile";
import ProfileUserPosts from "./pages/ProfileUserPosts";
import ProfileFavoritePosts from "./pages/ProfileFavoritePosts";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RestrictedRoute from "./components/routes/RestrictedRoute";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase/app";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setUser } from "./redux/auth/authSlice";
import Redirect from "./pages/auth/Redirect";
import PrivateRoute from "./components/routes/PrivateRoute";
import { getUser } from "./api/user/getUser";
import { selectUser } from "./redux/auth/selectors";

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  console.log("user App :>> ", user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await getUser(user?.uid);
        dispatch(setUser(data));
      } else {
        dispatch(setUser(undefined));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route
          path="auth"
          element={
            <RestrictedRoute>
              <Auth />
            </RestrictedRoute>
          }
        >
          <Route index element={<Redirect path="/auth/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={""}>
          <Route path="stories" element={""}>
            <Route path=":storyNumber" element={""} />
          </Route>
          <Route path="travellers" element={""} />
          <Route path="traveller/:travellerUid" element={<UserPage />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          >
            <Route index element={<Redirect path="/profile/favorite" />} />
            <Route path="favorite" element={<ProfileFavoritePosts />} />
            <Route path="user-posts" element={<ProfileUserPosts />} />
          </Route>
          <Route path="new-story" element={""} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
