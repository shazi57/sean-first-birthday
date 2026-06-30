import Head from 'next/head';

export default function ConceptC1() {
  return (
    <div className="flex flex-col max-w-[430px] mx-auto min-h-screen bg-baby-sky subpixel-antialiased">
      <Head>
        <title>시온이의 돐잔치 🎂</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="시온이의 돐잔치에 놀러오세요! 🎉" />
        <meta property="og:description" content="우리 시온이가 벌써 첫 생일을 맞이했어요!" />
      </Head>

      {/* Hero Section - Full bleed photo card with bottom text overlay */}
      <section className="px-4 pt-8 pb-4">
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg">
          {/* Full photo */}
          <div className="relative w-full h-[420px]">
            <img src="/images/sean-main.png" alt="시온" className="w-full h-full object-cover" />
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>
          {/* Text at bottom */}
          <div className="text-center px-6 pb-8 pt-2 -mt-16 relative z-10">
            <p className="font-cute text-xs text-baby-blue tracking-widest mb-2">HAPPY FIRST BIRTHDAY</p>
            <h1 className="font-cute text-5xl text-gray-700 mb-2">Sean</h1>
            <p className="font-nanum text-xs text-gray-500">류시온 · 2025.8.13</p>
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
    </div>
  );
}
