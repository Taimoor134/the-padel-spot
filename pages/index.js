import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to The Padel Spot</h1>
      <p>
        <Link href="/padel">Go to Booking Page</Link>
      </p>
    </main>
  );
}
