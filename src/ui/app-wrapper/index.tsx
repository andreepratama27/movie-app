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
      <main className="max-w-xl mx-auto w-full">{children}</main>
    </>
  );
}
