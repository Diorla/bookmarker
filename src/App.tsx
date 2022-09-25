import Link from "./components/link";
import useUser from "./hooks/useUser";
import signOut from "./services/signOut";
import spinner from "./assets/spinner.gif";
import Container from "./components/Container";

import React from "react";
const Home = React.lazy(() => import("./containers/home"));
const Form = React.lazy(() => import("./containers/form"));

function App() {
  const { user, loading } = useUser();

  if (loading)
    return (
      <Container>
        <img src={spinner} alt="loading" />
      </Container>
    );
  if (user?.uid)
    return (
      <Container>
        <Home user={user} />
        <Link onClick={() => signOut()} style={{ marginBottom: 4 }}>
          Sign out
        </Link>
      </Container>
    );
  return (
    <Container>
      <Form />
    </Container>
  );
}

export default App;
