import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import RestrictedRoute from "./components/routes/RestrictedRoute";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase/app";
import { useAppDispatch } from "./redux/hooks";
import { setUser } from "./redux/auth/authSlice";
import Cookies from "js-cookie";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      }
    });
  }, []);
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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={""}>
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
