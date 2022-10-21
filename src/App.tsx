import signOut from "./services/signOut";
import React from "react";
import { Container, Link, Loader } from "bookmarker-ui";
import { useUser } from "./userContext";

const Home = React.lazy(() => import("./containers/home"));
const Form = React.lazy(() => import("./containers/form"));

function App() {
  const { user, loadingUser } = useUser();

  if (loadingUser) return <Loader fullHeight />;
  if (user?.uid)
    return (
      <Container alignCenter>
        <Home />
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
