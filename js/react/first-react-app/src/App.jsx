import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from './components/List'
import ListItem from "./components/ListItem";
import ChiSono from "./components/ChiSono";

export const LanguageProvider = createContext("italian");

function App() {
  const [lang, setLang] = useState("italian");

  console.log("Github API:", process.env.REACT_APP_GITHUB_API);

  return (
    <BrowserRouter>
      <LanguageProvider.Provider value={lang}>
        <button
          onClick={() => setLang(lang === "italian" ? "english" : "italian")}
        >
          Change language {lang}
        </button>
        <h1>FS30 React</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <div>
                <Link to="/">Return to Home</Link>
                <h2>About</h2>
                <ChiSono />
              </div>
            }
          />
          <Route path="/list" element={<List />}>
            <Route index element={<div>Select an item</div>} />
            <Route path="/list/:itemId" element={<ListItem />} />      
          </Route>

          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </LanguageProvider.Provider>
    </BrowserRouter>
  );
}

export default App;
