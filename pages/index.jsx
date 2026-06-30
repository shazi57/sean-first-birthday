import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <Head>
        <title>Sean의 돐잔치 초대장 - Design Concepts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <h1 className="font-gowun text-2xl text-gray-800 mb-2">Sean의 돐잔치 초대장</h1>
      <p className="font-nanum text-sm text-gray-500 mb-8">디자인 컨셉 선택</p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link href="/concept-a">
          <a className="block p-6 bg-beige-100 rounded-xl border border-beige-200 hover:shadow-lg transition-shadow text-center">
            <div className="text-lg font-gowun text-gray-700 mb-1">Concept A</div>
            <div className="text-sm font-nanum text-gray-500">Soft & Classic — 따뜻하고 클래식한</div>
          </a>
        </Link>

        <Link href="/concept-b">
          <a className="block p-6 bg-sage-50 rounded-xl border border-sage-200 hover:shadow-lg transition-shadow text-center">
            <div className="text-lg font-gowun text-gray-700 mb-1">Concept B</div>
            <div className="text-sm font-nanum text-gray-500">Modern Minimal — 깔끔하고 모던한</div>
          </a>
        </Link>

        <Link href="/concept-c">
          <a className="block p-6 bg-baby-sky rounded-xl border border-baby-blue hover:shadow-lg transition-shadow text-center">
            <div className="text-lg font-gowun text-gray-700 mb-1">Concept C</div>
            <div className="text-sm font-nanum text-gray-500">Playful & Cute — 사랑스럽고 귀여운 (original)</div>
          </a>
        </Link>

        <Link href="/concept-c-1">
          <a className="block p-6 bg-baby-sky rounded-xl border border-baby-blue hover:shadow-lg transition-shadow text-center">
            <div className="text-lg font-gowun text-gray-700 mb-1">Concept C-1</div>
            <div className="text-sm font-nanum text-gray-500">Full photo cover + bottom text overlay</div>
          </a>
        </Link>

        <Link href="/concept-c-2">
          <a className="block p-6 bg-baby-sky rounded-xl border border-baby-blue hover:shadow-lg transition-shadow text-center">
            <div className="text-lg font-gowun text-gray-700 mb-1">Concept C-2</div>
            <div className="text-sm font-nanum text-gray-500">Text header + rectangular photo below</div>
          </a>
        </Link>

        <Link href="/concept-c-3">
          <a className="block p-6 bg-baby-sky rounded-xl border border-baby-blue hover:shadow-lg transition-shadow text-center">
            <div className="text-lg font-gowun text-gray-700 mb-1">Concept C-3</div>
            <div className="text-sm font-nanum text-gray-500">Large date numbers + rectangular photo</div>
          </a>
        </Link>

        <Link href="/concept-c-4">
          <a className="block p-6 bg-baby-sky rounded-xl border border-baby-blue hover:shadow-lg transition-shadow text-center">
            <div className="text-lg font-gowun text-gray-700 mb-1">Concept C-4</div>
            <div className="text-sm font-nanum text-gray-500">Decorated — crown, balloons, stars, hearts</div>
          </a>
        </Link>

        <Link href="/concept-c-4-1">
          <a className="block p-6 bg-baby-sky rounded-xl border border-baby-blue hover:shadow-lg transition-shadow text-center">
            <div className="text-lg font-gowun text-gray-700 mb-1">Concept C-4-1</div>
            <div className="text-sm font-nanum text-gray-500">C-4 + floating 🎁 gift button → Amazon wishlist</div>
          </a>
        </Link>

        <Link href="/concept-d">
          <a className="block p-6 bg-[#EAEFFF] rounded-xl border border-[#6B85B7]/30 hover:shadow-lg transition-shadow text-center">
            <div className="text-lg font-gowun text-gray-700 mb-1">Concept D</div>
            <div className="text-sm font-nanum text-gray-500">Barunson Style — 세련된 블루 톤</div>
          </a>
        </Link>
      </div>
    </div>
  );
}
