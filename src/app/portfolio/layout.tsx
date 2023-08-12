const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-[100px]">
      <h1 className="text-[100px]">My Work</h1>
      {children}
    </div>
  );
};

export default Layout;
