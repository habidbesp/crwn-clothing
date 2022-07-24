import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<main>"Shop"</main>} />
        <Route path="auth" element={<Authentication />} />
      </Route>
      <Route
        path="*"
        element={
          <main>
            <a href="/">
              <h1>NotFound</h1>
              <span>To 🏠</span>
            </a>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
