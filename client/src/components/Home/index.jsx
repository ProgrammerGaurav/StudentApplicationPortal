const Home = ({ user }) => {
  return (
    <div className="container">
      {user.name !== "" ? (
        <div>
          <div>User = {user.name}</div>
          <div>Email = {user.email}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
