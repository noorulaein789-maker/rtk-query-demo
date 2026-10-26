
import { useGetUsersQuery } from "./services/userApi";

function App() {
  const {
    data: users,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useGetUsersQuery();

  if (isLoading) return <h2>Loading users...</h2>;

  if (error) {
    return (
      <div>
        <h2>Failed to load users.</h2>
        <button onClick={refetch}>Try again</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>RTK Query - User Management</h1>

      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refresh Users"}
      </button>

      <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
        {users?.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>City: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
