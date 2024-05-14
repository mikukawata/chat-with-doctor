import Link from 'next/link';

export default function Home() {
  return (
    <main className='p-10'>
      <div className='flex min-h-screen flex-col items-center justify-center p-24'>
        <h1 className='text-3xl font-bold mb-7'>オンラインチャット相談アプリ</h1>
        <Link href={'/chat'} className='text-xl bg-red-400 py-2 px-4 rounded-md text-slate-50 cursor-pointer hover:bg-red-300'>
          お医者さんに相談する
        </Link>
      </div>
    </main>
  );
}
