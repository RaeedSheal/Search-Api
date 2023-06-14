import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Pictures from "./components/Pictures";
import Animalinfo from "./components/Animalinfo";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/pictures" element={<Pictures />} />
                <Route path="/pictures/:id" element={<Animalinfo />} />
            </Routes>
        </>
    );
}

export default App;
