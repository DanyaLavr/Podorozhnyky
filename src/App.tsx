import { Route, Routes } from "react-router-dom";
import Link from "./ui/Link";
import TextArea from "./ui/TextArea";
import { Form, Formik } from "formik";
import SelectItem from "./ui/SelectItem";
import Container from "./ui/Container";
import Section from "./ui/Section";

function App() {
  return (
    <>
      <Routes>
        <Route path="auth" element={""}>
          <Route path="login" element={""} />
          <Route path="register" element={""} />
        </Route>
        <Route
          path="/"
          element={
            <Section size="big">
              <Container>container</Container>
            </Section>
          }
        >
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
