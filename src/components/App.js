import React, { useContext } from "react";
import Header from "./Header";
import {ThemeContext} from "../context/user"
import Profile from "./Profile";
import {UserProvider} from "../context/user"
function App() {
  const {}=useContext(ThemeContext)
  function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    return (
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    );
  }
  return (
    <main className={theme}>
      <UserProvider>
        <Header
          theme={theme}
          setTheme={setTheme}
          user={user}
          setUser={setUser}
        />
        <Profile theme={theme} user={user} />
      </UserProvider>
    </main>
  );
}

export default App;
