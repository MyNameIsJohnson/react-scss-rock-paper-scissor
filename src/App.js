import React, { useState } from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  // set state for user choice and score state of 0
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  console.log(myChoice === "");
  return (
    <>
      <div className="container">
        {/* Create Header attribute of score equal to state score */}
        <Header score={score} />
        <Routes>
          <Route
            exact
            path="/"
            //Set setMyChoice attribute on Play component
            element={<Play setMyChoice={setMyChoice} />}
          ></Route>
          {!myChoice ? (
            // set all path to home when myChoice is empty string
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          ) : (
            <Route
              path="/game"
              element={
                //Set Game component attributes: myChoice, score, setScore
                <Game myChoice={myChoice} score={score} setScore={setScore} />
              }
            ></Route>
          )}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
