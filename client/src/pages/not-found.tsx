export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="w-full max-w-md mx-4 border-2 border-black p-6">
        <h1 className="text-2xl font-bold mb-4">404 Page Not Found</h1>
        <p className="text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}
