import Head from 'next/head';

export default function ConceptD() {
  return (
    <div className="flex flex-col max-w-[430px] mx-auto min-h-screen bg-white subpixel-antialiased">
      <Head>
        <title>시온이의 돐잔치에 초대합니다</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="시온이의 돐잔치에 초대합니다" />
        <meta property="og:description" content="우리 아들 시온이의 첫 번째 생일을 축하해주세요" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>

      {/* Cover Section - Main Design */}
      <section className="relative w-full bg-white">
        {/* Birth Month/Day at top */}
        <div className="text-center pt-10 pb-4">
          <p className="font-baskerville text-[2.8rem] text-[#6B85B7] leading-tight">08</p>
          <p className="font-baskerville text-[2.8rem] text-[#6B85B7] leading-tight">13</p>
        </div>

        {/* Main Photo */}
        <div className="flex justify-center px-4 py-2">
          <img
            src="/images/sean-main.png"
            alt="시온"
            className="w-full max-w-[340px] h-[360px] object-cover"
          />
        </div>

        {/* Title */}
        <div className="text-center py-8">
          <h1 className="text-[#6B85B7] text-2xl tracking-[0.15em] font-light" style={{ fontFamily: "'S-CoreDream', 'Noto Sans KR', sans-serif" }}>
            시온이의 돐잔치에 초대합니다
          </h1>
        </div>

        {/* Venue & Date */}
        <div className="text-center pb-10 space-y-1">
          <p className="text-[#6B85B7] text-sm font-nanum">우리 집</p>
          <p className="text-[#6B85B7] text-sm font-nanum">2026.08.08 토요일 오전 11:30</p>
        </div>
      </section>

      {/* Greeting Section - 인사말 */}
      <section className="bg-[#EAEFFF] py-16 px-8">
        {/* Decorative top divider */}
        <div className="flex justify-center mb-10">
          <div className="w-12 h-[1px] bg-[#6B85B7]/40"></div>
        </div>

        <div className="text-center font-nanum text-[0.85rem] text-[#333333] leading-[2.3]">
          <p>하루하루 감사한 마음으로 키운지</p>
          <p>어느덧 365일이 되었습니다.</p>
          <p className="mt-6">사랑스러운 우리 아들 시온이의</p>
          <p>첫 번째 생일을 맞이하여</p>
          <p>작은 잔치를 마련하였습니다.</p>
          <p className="mt-6">귀한 걸음 하시어</p>
          <p>시온이의 앞날을 축복해 주시면</p>
          <p>더없는 기쁨이 되겠습니다.</p>
        </div>

        {/* Decorative bottom divider */}
        <div className="flex justify-center mt-10">
          <div className="w-12 h-[1px] bg-[#6B85B7]/40"></div>
        </div>
      </section>

      {/* Baby Info Section */}
      <section className="bg-white">
        {/* Title bar */}
        <div className="bg-[#F5F0E8] py-4 flex items-center justify-end pr-8">
          <p className="text-[#6B85B7] text-sm" style={{ fontFamily: "'S-CoreDream', sans-serif" }}>
            2025.08.13
          </p>
        </div>

        {/* Profile photo with name */}
        <div className="relative py-8 flex flex-col items-center">
          {/* Circular photo frame */}
          <div className="relative">
            <img
              src="/images/sean-main.png"
              alt="시온"
              className="w-[200px] h-[200px] rounded-full object-cover border-4 border-white shadow-md"
            />
            {/* Name overlay top-left */}
            <div className="absolute top-2 left-0 bg-[#6B85B7]/80 px-3 py-1 rounded-r-full">
              <span className="text-white text-sm font-nanum">류시온</span>
            </div>
          </div>
        </div>

        {/* Baby info details */}
        <div className="px-8 pb-8 space-y-4">
          <div className="border-t border-[#F0F0F0] pt-4">
            <p className="text-[#BD8555] text-xs mb-1" style={{ fontFamily: "'S-CoreDream', sans-serif" }}>이름</p>
            <p className="text-[#333333] text-sm font-nanum">류시온 (Sean Ryu)</p>
          </div>
          <div className="border-t border-[#F0F0F0] pt-4">
            <p className="text-[#BD8555] text-xs mb-1" style={{ fontFamily: "'S-CoreDream', sans-serif" }}>생년월일</p>
            <p className="text-[#333333] text-sm font-nanum">2025년 8월 13일</p>
          </div>
          <div className="border-t border-[#F0F0F0] pt-4">
            <p className="text-[#BD8555] text-xs mb-1" style={{ fontFamily: "'S-CoreDream', sans-serif" }}>부모</p>
            <p className="text-[#333333] text-sm font-nanum">류태우 · 변은총</p>
          </div>
        </div>

        {/* Bottom decorative bar */}
        <div className="bg-[#F5F0E8] py-4"></div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-4">
        {/* Gallery title area */}
        <div className="flex justify-center py-6">
          <div className="text-center">
            <p className="text-[#6B85B7] text-xs tracking-[0.3em] uppercase mb-1" style={{ fontFamily: "'Libre Baskerville', serif" }}>Gallery</p>
            <p className="text-[#6B85B7] text-lg tracking-wider" style={{ fontFamily: "'S-CoreDream', sans-serif" }}>시온이의 성장기록</p>
          </div>
        </div>

        {/* Photo grid */}
        <div className="px-4 grid grid-cols-2 gap-2 pb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-[#EAEFFF]/50 border border-dashed border-[#6B85B7]/30 flex items-center justify-center">
              <span className="font-nanum text-xs text-[#6B85B7]/50">Photo {i}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Event Details - Location section */}
      <section className="bg-[#EAEFFF]/30 py-10">
        <div className="text-center mb-6">
          <p className="text-[#6B85B7] text-xs tracking-[0.3em] uppercase mb-1" style={{ fontFamily: "'Libre Baskerville', serif" }}>Location</p>
          <p className="text-[#6B85B7] text-lg tracking-wider" style={{ fontFamily: "'S-CoreDream', sans-serif" }}>오시는 길</p>
        </div>
        <div className="px-8 text-center font-nanum text-sm text-[#333333] space-y-2">
          <p className="font-bold">우리 집</p>
          <p className="text-xs text-gray-400">8715 W Rancho Dr, Glendale, AZ 85305</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-8 h-[1px] bg-[#6B85B7]/30"></div>
        </div>
        <p className="text-[#6B85B7] text-xs tracking-wider font-nanum">시온이의 돐잔치에 와주셔서 감사합니다</p>
      </footer>
    </div>
  );
}
