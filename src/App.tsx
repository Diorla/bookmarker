import useUser from "./hooks/useUser";
import signOut from "./services/signOut";
import React from "react";
import { Container, Link, Loader } from "bookmarker-ui";

const Home = React.lazy(() => import("./containers/home"));
const Form = React.lazy(() => import("./containers/form"));

function App() {
  const { user, loading } = useUser();

  if (loading) return <Loader fullHeight />;
  if (user?.uid)
    return (
      <Container style={{ alignItems: "center" }}>
        <Home user={user} />
        <Link onClick={() => signOut()} style={{ marginBottom: 4 }}>
          Sign out
        </Link>
      </Container>
    );
  return (
    <Container fullHeight alignCenter justifyCenter>
      <Form />
    </Container>
  );
}

export default App;
