import { Route, Routes } from "react-router-dom";

// Components
import LogIn from "./Components/LogIn/LogIn";
import Chats from "./Components/Chats/Chats"

// Context
import AuthContextProvider from "./Context/AuthContextProvider";

function App() {
  return (
      <AuthContextProvider>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route path="/" element={<LogIn />} />
        </Routes>
      </AuthContextProvider>
  );
}

export default App;
