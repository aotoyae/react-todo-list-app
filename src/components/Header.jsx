const Header = () => {
  const today = new Date();

  return (
    <div className="header-box">
      <h1>My Todo List</h1>
      <h2>{today.toLocaleDateString()}</h2>
    </div>
  );
};

export default Header;
