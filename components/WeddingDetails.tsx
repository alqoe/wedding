export default function WeddingDetails() {
  return (
    <div className="mt-12 text-center bg-[#552020] p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-8 tracking-wider uppercase">
        The Wedding of
      </h3>

      <div className="mb-12">
        <h2 className="font-['Playfair_Display'] text-[#FFD700] text-4xl mb-4">
          Zulfa & Alqoe
        </h2>
        <p className="text-lg tracking-wide uppercase">Wasah, 24 Januari 2025</p>
      </div>

      <div className="text-gray-300 space-y-8">
        <div className="font-['Playfair_Display'] text-xl tracking-[0.15em] leading-relaxed">
          <p className="mb-8 text-right text-[#FFD700]" dir="rtl" lang="ar">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>

          <p className="mb-8 text-sm">
            "Dan di antara ayat-ayat-Nya ialah Dia menciptakan untukmu
            istri-istri dari jenismu sendiri, supaya kamu merasa nyaman
            kepadanya, dan dijadikan-Nya di antaramu mawadah dan rahmah.
            Sesungguhnya pada yang demikian itu benar-benar terdapat
            tanda-tanda bagi kaum yang berpikir."
          </p>
        </div>

        <p className="text-lg tracking-wider text-[#FFD700]">Q.S. Ar-Rum: 21</p>
      </div>
    </div>
  );
}