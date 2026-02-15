import { useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase/app";
import { useAppDispatch } from "./redux/hooks";
import { setUser, stopLoading } from "./redux/auth/authSlice";
import { getUser } from "./api/user/getUser";

import AOS from "aos";
import "aos/dist/aos.css";

import RestrictedRoute from "./components/routes/RestrictedRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import Redirect from "./pages/auth/Redirect";
import Loader from "./components/ui/Loader";

const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const CreateStoryForm = lazy(() => import("./pages/CreateStory"));

const UserPage = lazy(() => import("./pages/UserPage"));
const Historia = lazy(() => import("./sections/historia/Historia"));
const AllTravelersPage = lazy(() => import("./pages/AllTravelersPage"));
const Profile = lazy(() => import("./pages/Profile"));
const ProfileUserPosts = lazy(() => import("./pages/ProfileUserPosts"));
const ProfileFavoritePosts = lazy(() => import("./pages/ProfileFavoritePosts"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (!user) {
          dispatch(setUser(null));
          return;
        }
    
        const data = await getUser(user.uid);
        dispatch(setUser(data));
      } catch (error) {
        // optional: if User not found -> create user doc here
        dispatch(setUser(null));
        console.error("Auth bootstrap error:", error);
      } finally {
        dispatch(stopLoading());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader loading={true} />
          </div>
        }
      >
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
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
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
            <Route path="travellers" element={<AllTravelersPage />} />
            <Route
              path="traveller"
              element={<Redirect path="/traveller/error" />}
            />
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
            <Route
              path="new-story"
              element={
                <PrivateRoute>
                  <Suspense
                    fallback={
                      <div
                        style={{
                          minHeight: "60vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Loader loading={true} />
                      </div>
                    }
                  >
                    <CreateStoryForm />
                  </Suspense>
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
