import Navbar from "../navbar";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div className="pt-20"></div>
      <main className="max-w-2xl mx-auto w-full px-4 sm:px-0 md:px-0">
        {children}
      </main>
    </>
  );
}
