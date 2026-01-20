import { Route, Routes } from "react-router-dom";

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
            <section className="section">
              <div className="container border border-red-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                vitae aliquid eaque perferendis, quas doloremque impedit dolor
                quaerat saepe veritatis eveniet mollitia error consectetur!
                Cupiditate voluptatibus velit dolor voluptate laboriosam non eos
                sint libero, illum repellendus suscipit odio cumque in
                doloremque sapiente fuga rerum! Vitae adipisci reiciendis rem
                sapiente velit dolores labore perferendis? Numquam dignissimos
                optio nisi at magni doloremque sequi aspernatur amet possimus
                distinctio deserunt, dicta libero molestias tempore, quasi illum
                nesciunt aperiam culpa voluptas animi cum adipisci impedit!
                Laboriosam omnis sint rerum, dolores voluptatem quibusdam
                corporis, quas eos exercitationem, eum blanditiis aut impedit
                nam id. Et, rerum cumque.
              </div>
            </section>
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
