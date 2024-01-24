import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-screen">
      <Navbar />
      <main className="flex flex-col h-screen w-100% md: mx-40">
        {children}
      </main>
    </div>
  );
};

export default Layout;
