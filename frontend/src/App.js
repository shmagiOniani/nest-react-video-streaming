import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, SignIn, SignUp, Video, VideoList } from "./pages/Index";

export default function App() {

  const token = localStorage.getItem("token");
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  return (
    <>
      <Header isLoggedIn={token} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/video"
            element={<VideoList setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route
            path="/video/:id"
            element={<Video setLoggedIn={setLoggedIn} />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />
            }
          ></Route>
          <Route
            path="/signup"
            element={<SignUp setIsLoggedIn={setLoggedIn} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
