export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="h-14 bg-black w-full flex items-center fixed">
        <div className="max-w-xl mx-auto w-full">
          <p className="text-white">Movie App</p>
        </div>
      </nav>

      <div className="pt-16"></div>
      <main className="max-w-xl mx-auto w-full">{children}</main>
    </>
  );
}

function App() {
  return (
    <AppWrapper>
      <p className="text-red-500">Testing</p>
    </AppWrapper>
  );
}

export default App;
