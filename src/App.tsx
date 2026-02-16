import { Route, Routes } from "react-router-dom";
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
import Historia from "../src/components/Historia/Historia";

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
          <Route path="travellers" element={""} />
          <Route path="traveller" element={""} />
          <Route path="profile" element={""} />
          <Route path="new-story" element={""} />
        </Route>
        <Route path="stories" element={""}>
          <Route
            path=":storyNumber"
            element={
              <Historia
                title="Колумбія"
                author="Олександр Петренко"
                date="12.03.2024"
                continent="Південна Америка"
                imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/250px-Flag_of_Colombia.svg.png"
                description="Колумбія - це країна, розташована в північній частині Південної Америки. Вона відома своєю багатою культурою, різноманітною природою та історією. Колумбія має багато визначних місць, таких як Картахена, Медельїн та Богота. Країна також славиться своєю музикою, танцями та кухнею."
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
