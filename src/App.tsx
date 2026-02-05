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
import { useAppDispatch } from "./redux/hooks";
import { setUser } from "./redux/auth/authSlice";
import Cookies from "js-cookie";
import Redirect from "./pages/auth/Redirect";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          })
        );
        const setCookies = async () => {
          const token = await user.getIdToken();
          Cookies.set("token", token);
        };
        setCookies();
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
          <Route index element={<Redirect />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={""}>
          <Route path="stories" element={""}>
            <Route path=":storyNumber" element={""} />
          </Route>
          <Route path="travellers" element={""} />
          <Route path="traveller/:travellerUid" element={<UserPage />} />
          <Route path="profile" element={<Profile />}>
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
