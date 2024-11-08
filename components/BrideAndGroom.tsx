import Image from "next/image";

export default function BrideAndGroom() {
  return (
    <div className="max-w-2xl mx-auto text-center mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-4">Bride and Groom</h2>
      <div className="flex flex-row justify-center space-x-4">
        <div className="bg-[#552020] text-white rounded-lg p-4 w-1/2 flex flex-col items-center">
          <div className="relative w-full aspect-square mb-4">
            <Image
              src="/zulfa.jpg"
              alt="Bride"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-500">Istemrariyah Zulfa</h3>
            <p className="text-sm">Putri dari Bapak Thaib Mubarak Al Bahraini S.Pd.i & Basinah</p>
          </div>
        </div>

        <div className="bg-[#552020] text-white rounded-lg p-4 w-1/2 flex flex-col items-center">
          <div className="relative w-full aspect-square mb-4">
            <Image
              src="/alqoe.jpg"
              alt="Groom"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-500">M.Alqadiri</h3>
            <p className="text-sm">Putra dari Bapak H.Rachmani (Alm) & Ibu Chalidah</p>
          </div>
        </div>
      </div>
    </div>
  );
}