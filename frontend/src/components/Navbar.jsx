const Navbar = () => {
  return (
    <nav className="bg-mute-orange">
      <div className="max-w-screen h-15 flex flex-wrap items-center justify-between text-white mx-auto p-4">
        <div>Trigger Warning</div>
        <ul className="flex flex-row gap-6 mr-8">
          <li>Dashboard</li>
          <li>
            <a href="/list">My Triggers</a>
          </li>
          <li>Exercises</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
