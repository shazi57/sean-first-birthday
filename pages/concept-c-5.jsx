import Head from 'next/head';
import { useEffect, useState } from 'react';

function SparkleIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l1.09 3.41L16.5 6.5l-3.41 1.09L12 11l-1.09-3.41L7.5 6.5l3.41-1.09L12 2z"/>
      <path d="M18 12l.75 2.25L21 15l-2.25.75L18 18l-.75-2.25L15 15l2.25-.75L18 12z"/>
      <path d="M6 14l.5 1.5L8 16l-1.5.5L6 18l-.5-1.5L4 16l1.5-.5L6 14z"/>
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"/>
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-5.09 5.09a2.9 2.9 0 0 1 -3.32 .57l-.162 -.09l-.137 -.1l-5.106 -5.105a6 6 0 0 1 .413 -8.397z"/>
    </svg>
  );
}

function BalloonIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1a7 7 0 0 1 7 7c0 5.457 -3.028 10 -7 10c-3.972 0 -7 -4.543 -7 -10a7 7 0 0 1 7 -7z"/>
      <path d="M12 18a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"/>
    </svg>
  );
}

function ConfettiIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 5h2"/><path d="M5 4v2"/><path d="M11.5 4l-.5 2"/>
      <path d="M18 5h2"/><path d="M19 4v2"/><path d="M15 9l-1 1"/>
      <path d="M18 13l2 -.5"/><path d="M18 19h2"/><path d="M19 18v2"/>
      <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z"/>
    </svg>
  );
}

function LeafBranchLeft({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className={className}>
      <path d="M58 12 C45 12, 35 12, 2 12"/>
      <path d="M20 12 C20 8, 16 5, 12 6"/>
      <path d="M28 12 C28 7, 24 4, 20 5"/>
      <path d="M36 12 C36 8, 32 5, 28 6"/>
      <path d="M20 12 C20 16, 16 19, 12 18"/>
      <path d="M28 12 C28 17, 24 20, 20 19"/>
      <path d="M36 12 C36 16, 32 19, 28 18"/>
    </svg>
  );
}

function LeafBranchRight({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className={className}>
      <path d="M2 12 C15 12, 25 12, 58 12"/>
      <path d="M40 12 C40 8, 44 5, 48 6"/>
      <path d="M32 12 C32 7, 36 4, 40 5"/>
      <path d="M24 12 C24 8, 28 5, 32 6"/>
      <path d="M40 12 C40 16, 44 19, 48 18"/>
      <path d="M32 12 C32 17, 36 20, 40 19"/>
      <path d="M24 12 C24 16, 28 19, 32 18"/>
    </svg>
  );
}

export default function ConceptC5() {
  const [showWishlist, setShowWishlist] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
      setShowButton(!scrolledToBottom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col max-w-[430px] mx-auto min-h-screen bg-baby-sky subpixel-antialiased relative">
      <Head>
        <title>시온이의 돌잔치 🎂</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="시온이의 돌잔치에 놀러오세요! 🎉" />
        <meta property="og:description" content="우리 시온이가 벌써 첫 생일을 맞이했어요!" />
      </Head>

      {/* Floating Gift Button */}
      <button
        onClick={() => setShowWishlist(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-white rounded-full shadow-lg border border-baby-blue/30 flex items-center justify-center transition-all duration-300 active:scale-95 ${showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
        aria-label="Wishlist"
      >
        <span className="text-2xl">🎁</span>
      </button>

      {/* Wishlist Overlay */}
      {showWishlist && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center" onClick={() => setShowWishlist(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative w-full max-w-[430px] bg-white rounded-t-3xl p-6 pb-10 animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-center mb-4">
              <div className="w-10 h-1 rounded-full bg-gray-300"></div>
            </div>
            <div className="text-center mb-6">
              <div className="text-3xl mb-2">🎁</div>
              <h3 className="font-cute text-xl text-gray-700 mb-2">시온이에게 선물하기</h3>
              <p className="font-nanum text-xs text-gray-400 leading-5">
                시온이의 첫 생일을 축하해주실 분들을 위해<br />위시리스트를 준비했어요!
              </p>
            </div>
            <a href="https://www.amazon.com/hz/wishlist/ls/PLACEHOLDER" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#FF9900] hover:bg-[#e88b00] rounded-2xl text-white font-nanum text-sm font-bold transition-colors shadow-md">
              <span className="text-lg">📦</span>시온이의 첫 선물 고르기
            </a>
            <p className="font-nanum text-xs text-gray-400 text-center mt-4">선물은 마음일 뿐, 와주시는 것만으로 감사합니다 💙</p>
            <button onClick={() => setShowWishlist(false)} className="mt-4 w-full py-3 rounded-2xl border border-gray-200 font-nanum text-sm text-gray-500 hover:bg-gray-50 transition-colors">닫기</button>
          </div>
        </div>
      )}

      {/* Hero Section - Full width, no card */}
      <section className="bg-white w-full">
        {/* Date with decorative branches - darker */}
        <div className="flex items-center justify-center gap-3 pt-12 pb-2">
          <LeafBranchLeft className="w-14 h-6 text-[#5a7aad]" />
          <div className="text-center">
            <p className="font-baskerville text-3xl text-[#4a6a9d] tracking-wider">08.13</p>
          </div>
          <LeafBranchRight className="w-14 h-6 text-[#5a7aad]" />
        </div>

        {/* Happy Birthday text - darker */}
        <div className="text-center pb-6">
          <p className="font-cute text-xs text-[#4a6a9d] tracking-[0.25em]">HAPPY FIRST BIRTHDAY</p>
          <div className="flex justify-center gap-1.5 mt-3">
            <span className="w-1 h-1 rounded-full bg-[#5a7aad]/50"></span>
            <span className="w-1 h-1 rounded-full bg-pink-300/70"></span>
            <span className="w-1 h-1 rounded-full bg-yellow-300/80"></span>
            <span className="w-1 h-1 rounded-full bg-[#5a7aad]/50"></span>
            <span className="w-1 h-1 rounded-full bg-pink-300/70"></span>
          </div>
        </div>

        {/* Photo - full width with decorative elements at edges */}
        <div className="w-full relative overflow-hidden">
          <img
            src="/images/sean-main.png"
            alt="시온"
            className="w-full h-[500px] object-[center_100%] object-cover"
          />
          {/* Decorative icons - contained in photo, hugging corners/edges */}
          <div className="absolute top-3 left-3">
            <StarIcon className="w-5 h-5 text-yellow-200 opacity-50" />
          </div>
          <div className="absolute top-4 right-4">
            <BalloonIcon className="w-5 h-5 text-blue-200 opacity-45" />
          </div>
          <div className="absolute top-14 left-5">
            <HeartIcon className="w-3 h-3 text-pink-200 opacity-40" />
          </div>
          <div className="absolute bottom-4 left-3">
            <BalloonIcon className="w-4 h-4 text-pink-200 opacity-45" />
          </div>
          <div className="absolute bottom-3 right-4">
            <StarIcon className="w-4 h-4 text-yellow-200 opacity-50" />
          </div>
          <div className="absolute bottom-14 right-5">
            <HeartIcon className="w-3 h-3 text-red-200 opacity-40" />
          </div>
          <div className="absolute top-14 right-12">
            <StarIcon className="w-3 h-3 text-yellow-100 opacity-45" />
          </div>
          <div className="absolute bottom-12 left-5">
            <ConfettiIcon className="w-4 h-4 text-blue-200 opacity-40" />
          </div>
        </div>

        {/* Thin decorative line separator */}
        <div className="flex justify-center py-4">
          <div className="w-16 h-[0.5px] bg-baby-blue/30"></div>
        </div>

        {/* Name area - with sparkles and tagline */}
        <div className="text-center pb-10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <SparkleIcon className="w-4 h-4 text-yellow-300/70" />
            <h1 className="font-cute text-5xl text-gray-700">Sean</h1>
            <SparkleIcon className="w-4 h-4 text-yellow-300/70" />
          </div>
          <p className="font-nanum text-sm text-gray-500 mt-2">류시온</p>
          <p className="font-nanum text-[0.7rem] text-gray-400 mt-2 tracking-wider">우리의 첫 번째 기적 ✦</p>
        </div>
      </section>

      {/* Greeting - Bubbly */}
      <section className="px-6 py-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
          <div className="text-3xl mb-4">🎂</div>
          <h2 className="font-cute text-xl text-gray-700 mb-4">초대합니다!</h2>
          <div className="font-nanum text-[0.82rem] text-gray-500 leading-7">
            <p>안녕하세요!</p>
            <p>우리 시온이가 벌써 첫 생일을 맞이했어요.</p>
            <p className="mt-3">매일매일 쑥쑥 자라준 시온이와 함께</p>
            <p>기쁜 날을 보내고 싶어</p>
            <p>작은 돌잔치를 준비했습니다. 🎉</p>
            <p className="mt-3">오셔서 시온이의 첫 생일을</p>
            <p>함께 축하해 주세요! 🥰</p>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-baby-cream">
            <span className="text-sm">👨‍👩‍👦</span>
            <span className="font-nanum text-xs text-gray-600">류태우 · 변은총의 아들 시온</span>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="px-6 pb-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-baby-mint/50 px-6 py-4 text-center">
            <h2 className="font-cute text-lg text-gray-700">돌잔치 안내 🎊</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-baby-cream flex items-center justify-center text-lg shrink-0">📅</div>
              <div className="font-nanum pt-1">
                <p className="text-sm font-bold text-gray-700">날짜</p>
                <p className="text-sm text-gray-500">2026년 8월 8일 토요일</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-baby-cream flex items-center justify-center text-lg shrink-0">⏰</div>
              <div className="font-nanum pt-1">
                <p className="text-sm font-bold text-gray-700">시간</p>
                <p className="text-sm text-gray-500">오전 11시 30분</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-baby-cream flex items-center justify-center text-lg shrink-0">📍</div>
              <div className="font-nanum pt-1">
                <p className="text-sm font-bold text-gray-700">장소</p>
                <p className="text-sm text-gray-500">우리 집</p>
                <p className="text-xs text-gray-400">8715 W Rancho Dr, Glendale, AZ 85305</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Carousel */}
      <section className="pb-8">
        <h2 className="font-cute text-lg text-gray-700 text-center mb-4">시온이의 성장앨범 📸</h2>
        <div className="px-6 overflow-x-auto">
          <div className="flex gap-3 pb-4" style={{ width: 'max-content' }}>
            {['탄생', '100일', '6개월', '9개월', '11개월', '돌'].map((label, i) => (
              <div key={i} className="w-40 shrink-0">
                <div className="w-40 h-48 rounded-2xl bg-white border-2 border-dashed border-baby-blue/50 flex items-center justify-center shadow-sm">
                  <span className="font-nanum text-xs text-gray-400">Photo</span>
                </div>
                <p className="font-nanum text-xs text-gray-500 text-center mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wishlist Section */}
      <section className="px-6 pb-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
          <div className="text-3xl mb-3">🎁</div>
          <h2 className="font-cute text-lg text-gray-700 mb-2">시온이에게 선물하기</h2>
          <p className="font-nanum text-xs text-gray-400 leading-5 mb-5">
            시온이의 첫 생일을 축하해주실 분들을 위해<br />위시리스트를 준비했어요!
          </p>
          <a href="https://www.amazon.com/hz/wishlist/ls/PLACEHOLDER" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF9900] hover:bg-[#e88b00] rounded-full text-white font-nanum text-sm font-bold transition-colors shadow-md">
            <span>📦</span>시온이의 첫 선물 고르기
          </a>
          <p className="font-nanum text-xs text-gray-400 mt-4">선물은 마음일 뿐, 와주시는 것만으로 감사합니다 💙</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="font-cute text-sm text-gray-500">시온이의 돌잔치에 와주셔서 감사합니다 💙</p>
        <p className="font-nanum text-xs text-gray-400 mt-1">Made with love</p>
      </footer>

      <style jsx>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
