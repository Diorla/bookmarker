import styled from "styled-components";
import Form from "./containers/form";
import useUser from "./hooks/useUser";
import signOut from "./services/signOut";

const Container = styled.div`
  background: ${({ theme }) => theme.greyLight1};
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
function App() {
  const { user, loading } = useUser();

  if (loading) return <Container>This is loading</Container>;
  if (user?.uid)
    return (
      <Container>
        <div>Welcome {user?.displayName}</div>
        <button onClick={() => signOut()}>Sign out</button>
      </Container>
    );
  return (
    <Container>
      <Form />
    </Container>
  );
}

export default App;
