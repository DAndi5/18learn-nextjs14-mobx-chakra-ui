import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='mt-24'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/Next_WS_modal4/999_tmp/my-learn-next6/public">Home</Link>
      </p>
    </div>
  );
}
