import Head from 'next/head';

export default function ConceptB() {
  return (
    <div className="flex flex-col max-w-[430px] mx-auto min-h-screen bg-white subpixel-antialiased">
      <Head>
        <title>Sean's 돐잔치</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Sean의 돐잔치에 초대합니다" />
        <meta property="og:description" content="Sean's First Birthday Celebration" />
      </Head>

      {/* Hero Section - Full bleed with overlay text */}
      <section className="relative w-full h-[600px] bg-sage-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/images/sean-main.png" alt="시온" className="w-72 h-96 object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white/90 to-transparent">
          <p className="font-display text-xs tracking-[0.3em] text-gray-400 uppercase mb-1">First Birthday</p>
          <h1 className="font-display text-4xl text-gray-800 italic">Sean</h1>
          <p className="font-nanum text-xs text-gray-400 mt-1">2025. 8. 13 — 2026. 8. 8</p>
        </div>
      </section>

      {/* Greeting - Minimal */}
      <section className="px-8 py-16 text-center">
        <div className="w-6 h-[1px] bg-gray-300 mx-auto mb-8"></div>
        <p className="font-serif_kr text-sm text-gray-600 leading-8">
          하루하루 감사한 마음으로<br />
          키운지 어느덧 365일이 되었습니다.<br /><br />
          사랑스러운 우리 아들 시온이의<br />
          첫 번째 생일잔치에 초대합니다.<br /><br />
          함께 축하해 주시면<br />
          더없는 기쁨이 되겠습니다.
        </p>
        <div className="w-6 h-[1px] bg-gray-300 mx-auto mt-8"></div>
      </section>

      {/* Parents info - Inline minimal */}
      <section className="px-8 pb-12 text-center">
        <p className="font-nanum text-sm text-gray-600">
          <span className="text-gray-800 font-bold">류태우</span> · <span className="text-gray-800 font-bold">변은총</span>의 아들 시온
        </p>
      </section>

      {/* Event Details - Card style */}
      <section className="px-6 pb-16">
        <div className="bg-sage-50 rounded-2xl p-8">
          <h2 className="font-display text-lg text-gray-700 tracking-wider mb-6 text-center">WHEN & WHERE</h2>
          <div className="space-y-4 font-nanum text-sm text-gray-600">
            <div className="flex gap-4">
              <span className="text-sage-300 w-6 text-center">—</span>
              <div>
                <p className="font-bold text-gray-700">일시</p>
                <p>2026년 8월 8일 토요일, 오전 11:30</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-sage-300 w-6 text-center">—</span>
              <div>
                <p className="font-bold text-gray-700">장소</p>
                <p>우리 집</p>
                <p className="text-xs text-gray-400 mt-1">8715 W Rancho Dr, Glendale, AZ 85305</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Asymmetric grid */}
      <section className="px-6 pb-16">
        <h2 className="font-display text-lg text-gray-700 tracking-wider mb-6 text-center">GALLERY</h2>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 row-span-2 aspect-square rounded-lg bg-sage-100 border border-dashed border-sage-200 flex items-center justify-center">
            <span className="font-nanum text-xs text-gray-400">Main Photo</span>
          </div>
          <div className="aspect-square rounded-lg bg-sage-100 border border-dashed border-sage-200 flex items-center justify-center">
            <span className="font-nanum text-xs text-gray-400">2</span>
          </div>
          <div className="aspect-square rounded-lg bg-sage-100 border border-dashed border-sage-200 flex items-center justify-center">
            <span className="font-nanum text-xs text-gray-400">3</span>
          </div>
          <div className="aspect-square rounded-lg bg-sage-100 border border-dashed border-sage-200 flex items-center justify-center">
            <span className="font-nanum text-xs text-gray-400">4</span>
          </div>
          <div className="aspect-square rounded-lg bg-sage-100 border border-dashed border-sage-200 flex items-center justify-center">
            <span className="font-nanum text-xs text-gray-400">5</span>
          </div>
          <div className="aspect-square rounded-lg bg-sage-100 border border-dashed border-sage-200 flex items-center justify-center">
            <span className="font-nanum text-xs text-gray-400">6</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-gray-100">
        <p className="font-display text-sm text-gray-300 italic">Thank you for celebrating with us</p>
      </footer>
    </div>
  );
}
