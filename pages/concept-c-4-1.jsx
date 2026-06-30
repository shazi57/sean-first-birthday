import { useState } from 'react';
import Head from 'next/head';

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
      <path d="M12 20a2 2 0 0 1 1.995 1.85l.005 .15a2 2 0 1 1 -4 0a2 2 0 0 1 2 -2z"/>
    </svg>
  );
}

function CrownIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2.939 5.955l6.572 .955l-4.756 4.635l1.123 6.545l-5.878 -3.09l-5.878 3.09l1.123 -6.545l-4.756 -4.635l6.572 -.955l2.939 -5.955z"/>
    </svg>
  );
}

function ConfettiIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 5h2"/>
      <path d="M5 4v2"/>
      <path d="M11.5 4l-.5 2"/>
      <path d="M18 5h2"/>
      <path d="M19 4v2"/>
      <path d="M15 9l-1 1"/>
      <path d="M18 13l2 -.5"/>
      <path d="M18 19h2"/>
      <path d="M19 18v2"/>
      <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z"/>
    </svg>
  );
}

export default function ConceptC4_1() {
  const [showWishlist, setShowWishlist] = useState(false);

  return (
    <div className="flex flex-col max-w-[430px] mx-auto min-h-screen bg-baby-sky subpixel-antialiased relative">
      <Head>
        <title>시온이의 돐잔치 🎂</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="시온이의 돐잔치에 놀러오세요! 🎉" />
        <meta property="og:description" content="우리 시온이가 벌써 첫 생일을 맞이했어요!" />
      </Head>

      {/* Floating Gift Button - Fixed bottom right */}
      <button
        onClick={() => setShowWishlist(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white rounded-full shadow-lg border border-baby-blue/30 flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
        aria-label="Wishlist"
      >
        <span className="text-2xl">🎁</span>
      </button>

      {/* Wishlist Overlay */}
      {showWishlist && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center" onClick={() => setShowWishlist(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-[430px] bg-white rounded-t-3xl p-6 pb-10 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="flex justify-center mb-4">
              <div className="w-10 h-1 rounded-full bg-gray-300"></div>
            </div>

            {/* Content */}
            <div className="text-center mb-6">
              <div className="text-3xl mb-2">🎁</div>
              <h3 className="font-cute text-xl text-gray-700 mb-2">시온이에게 선물하기</h3>
              <p className="font-nanum text-xs text-gray-400 leading-5">
                시온이의 첫 생일을 축하해주실 분들을 위해<br />
                위시리스트를 준비했어요!
              </p>
            </div>

            {/* Amazon Wishlist Button */}
            <a
              href="https://www.amazon.com/hz/wishlist/ls/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#FF9900] hover:bg-[#e88b00] rounded-2xl text-white font-nanum text-sm font-bold transition-colors shadow-md"
            >
              <span className="text-lg">📦</span>
              Amazon Wishlist 보기
            </a>

            {/* Secondary note */}
            <p className="font-nanum text-xs text-gray-400 text-center mt-4">
              선물은 마음일 뿐, 와주시는 것만으로 감사합니다 💙
            </p>

            {/* Close button */}
            <button
              onClick={() => setShowWishlist(false)}
              className="mt-4 w-full py-3 rounded-2xl border border-gray-200 font-nanum text-sm text-gray-500 hover:bg-gray-50 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* Hero Section - Decorated card with floating icons */}
      <section className="px-4 pt-8 pb-4">
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg">
          {/* Floating decorative elements around the card */}
          <div className="absolute top-3 left-4 z-20">
            <BalloonIcon className="w-7 h-7 text-blue-300 opacity-70" />
          </div>
          <div className="absolute top-5 right-5 z-20">
            <StarIcon className="w-6 h-6 text-yellow-300 opacity-80" />
          </div>
          <div className="absolute top-16 left-8 z-20">
            <StarIcon className="w-4 h-4 text-yellow-200 opacity-60" />
          </div>
          <div className="absolute top-12 right-12 z-20">
            <HeartIcon className="w-4 h-4 text-pink-300 opacity-60" />
          </div>
          <div className="absolute bottom-[140px] left-5 z-20">
            <ConfettiIcon className="w-6 h-6 text-blue-300 opacity-60" />
          </div>
          <div className="absolute bottom-[160px] right-5 z-20">
            <BalloonIcon className="w-5 h-5 text-pink-300 opacity-60" />
          </div>
          <div className="absolute bottom-[180px] left-12 z-20">
            <HeartIcon className="w-3 h-3 text-red-300 opacity-50" />
          </div>
          <div className="absolute bottom-[200px] right-10 z-20">
            <StarIcon className="w-3 h-3 text-yellow-300 opacity-50" />
          </div>

          {/* Crown above photo */}
          <div className="flex justify-center pt-6">
            <CrownIcon className="w-8 h-8 text-yellow-400 opacity-80" />
          </div>

          {/* Photo */}
          <div className="px-8 pt-2 pb-4">
            <img
              src="/images/sean-main.png"
              alt="시온"
              className="w-full h-[300px] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Decorative dots row */}
          <div className="flex justify-center gap-2 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-baby-blue/50"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-200/70"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-200/70"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-baby-blue/50"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-200/70"></span>
          </div>

          {/* Name area */}
          <div className="text-center pt-2 pb-8">
            <p className="font-cute text-xs text-baby-blue tracking-widest mb-2">HAPPY FIRST BIRTHDAY</p>
            <h1 className="font-cute text-5xl text-gray-700">Sean</h1>
            <p className="font-nanum text-xs text-gray-500 mt-3">류시온 · 2025.8.13</p>
          </div>
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
            <p>작은 돐잔치를 준비했습니다. 🎉</p>
            <p className="mt-3">오셔서 시온이의 첫 생일을</p>
            <p>함께 축하해 주세요! 🥰</p>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-baby-cream">
            <span className="text-sm">👨‍👩‍👦</span>
            <span className="font-nanum text-xs text-gray-600">류태우 · 변은총의 아들 시온</span>
          </div>
        </div>
      </section>

      {/* Event Details - Fun card */}
      <section className="px-6 pb-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-baby-mint/50 px-6 py-4 text-center">
            <h2 className="font-cute text-lg text-gray-700">돐잔치 안내 🎊</h2>
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

      {/* Photo Gallery - Carousel-style cards */}
      <section className="pb-8">
        <h2 className="font-cute text-lg text-gray-700 text-center mb-4">시온이의 성장앨범 📸</h2>
        <div className="px-6 overflow-x-auto">
          <div className="flex gap-3 pb-4" style={{ width: 'max-content' }}>
            {['탄생', '100일', '6개월', '9개월', '11개월', '돐'].map((label, i) => (
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

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="font-cute text-sm text-gray-500">시온이의 돐잔치에 와주셔서 감사합니다 💙</p>
        <p className="font-nanum text-xs text-gray-400 mt-1">Made with love</p>
      </footer>

      {/* Slide-up animation */}
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
