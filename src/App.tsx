import Link from "./components/link";
import Form from "./containers/form";
import Home from "./containers/home";
import useUser from "./hooks/useUser";
import signOut from "./services/signOut";
import spinner from "./assets/spinner.gif";
import Container from "./components/Container";

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
