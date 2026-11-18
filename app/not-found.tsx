import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-bg">
      <div className="text-center">
        <h1 className="font-display font-extrabold text-6xl mb-4">404</h1>
        <p className="text-xl text-ink/60 mb-8">Page not found</p>
        <Link href="/" className="btn-pill btn-primary">
          Go back home
        </Link>
      </div>
    </div>
  );
}
