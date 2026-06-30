import Head from 'next/head';

export default function ConceptA() {
  return (
    <div className="flex flex-col max-w-[430px] mx-auto min-h-screen bg-beige-50 subpixel-antialiased">
      <Head>
        <title>Sean의 돐잔치에 초대합니다</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Sean의 돐잔치에 초대합니다" />
        <meta property="og:description" content="우리 아들 시온이의 첫 번째 생일을 축하해주세요" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[520px] bg-beige-200 flex flex-col items-center justify-end pb-12">
        {/* Placeholder for hero photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-beige-200/30 to-beige-50/80 z-10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/images/sean-main.png" alt="시온" className="w-64 h-80 rounded-2xl object-cover" />
        </div>
        <div className="relative z-20 text-center">
          <p className="font-gowun text-sm text-gray-500 tracking-widest mb-2">첫 번째 생일</p>
          <h1 className="font-gowun text-3xl text-gray-800 font-bold tracking-wider">류시온</h1>
          <p className="font-nanum text-xs text-gray-400 mt-2">SEAN RYU</p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8">
        <span className="w-8 h-[1px] bg-beige-300"></span>
        <span className="mx-3 text-beige-300 text-lg">✦</span>
        <span className="w-8 h-[1px] bg-beige-300"></span>
      </div>

      {/* Greeting Section - 인사말 */}
      <section className="px-8 pb-12 text-center">
        <h2 className="font-gowun text-xl text-gray-700 font-bold tracking-widest mb-6">초대합니다</h2>
        <div className="font-nanum text-[0.82rem] text-gray-500 leading-7">
          <p>하루하루 감사한 마음으로 키운지</p>
          <p>어느덧 365일이 되었습니다.</p>
          <p className="mt-4">사랑스러운 우리 아들 시온이의</p>
          <p>첫 번째 생일을 맞이하여</p>
          <p>작은 잔치를 마련하였습니다.</p>
          <p className="mt-4">귀한 걸음 하시어</p>
          <p>시온이의 앞날을 축복해 주시면</p>
          <p>더없는 기쁨이 되겠습니다.</p>
        </div>
        <div className="mt-8 font-gowun text-sm text-gray-600">
          <p>류태우 · 변은총 <span className="text-gray-400">의 아들</span> 시온</p>
        </div>
      </section>

      {/* Divider */}
      <span className="border-b border-beige-200 w-[80%] mx-auto"></span>

      {/* Event Details - 행사 안내 */}
      <section className="px-8 py-12 text-center">
        <h2 className="font-gowun text-xl text-gray-700 font-bold tracking-widest mb-8">돐잔치 안내</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-beige-100">
          <div className="font-nanum text-sm text-gray-500 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-beige-300">📅</span>
              <span>2026년 8월 8일 토요일</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-beige-300">⏰</span>
              <span>오전 11시 30분</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-beige-300">📍</span>
              <span>우리 집</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-beige-100">
            <p className="font-nanum text-xs text-gray-400">8715 W Rancho Dr, Glendale, AZ 85305</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-beige-100/50 py-12">
        <h2 className="font-gowun text-xl text-gray-700 font-bold tracking-widest mb-8 text-center">시온이의 성장기록</h2>
        <div className="px-6 grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square rounded-lg bg-beige-200 border border-dashed border-beige-300 flex items-center justify-center">
              <span className="font-nanum text-xs text-gray-400">Photo {i}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 px-6">
          <div className="aspect-[16/9] rounded-lg bg-beige-200 border border-dashed border-beige-300 flex items-center justify-center">
            <span className="font-nanum text-xs text-gray-400">Wide Photo 5</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="font-gowun text-sm text-gray-400">시온이의 돐잔치에 와주셔서 감사합니다 ♡</p>
      </footer>
    </div>
  );
}
