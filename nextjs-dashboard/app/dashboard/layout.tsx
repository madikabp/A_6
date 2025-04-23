export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 md:p-12">
      {children}
    </div>
  );
}
