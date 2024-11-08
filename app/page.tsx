import Link from 'next/link';
import { Podcast, Share2, PlusCircle, MoreHorizontal, Play } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-[430px] mx-auto bg-gradient-to-b from-[#121212] to-black min-h-screen text-white">
      {/* Navigation Filters */}
      <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar">
        <div className="w-8 h-8 bg-[#ff5733] rounded-full flex items-center justify-center font-bold flex-shrink-0">Z</div>
        <div className="px-4 py-1 bg-[#1ed760] rounded-full text-sm font-medium flex-shrink-0">All</div>
        <div className="px-4 py-1 bg-[#282828] rounded-full text-sm font-medium flex-shrink-0">Music</div>
        <div className="px-4 py-1 bg-[#282828] rounded-full text-sm font-medium flex-shrink-0">Podcasts</div>
      </div>

      {/* Recent Content Grid */}
      <div className="grid grid-cols-2 gap-2 px-2">
        <div className="bg-[#282828] rounded-md p-2 flex items-center gap-2">
          <Image
            src="https://secure.gravatar.com/avatar/ab9bea5980445dd777e0e4d372ff689d?s=200&r=g"
            width={48}
            height={48}
            className="rounded-md object-cover"
            alt="Profile"
          />
          <span className="font-medium text-sm">Rizwan Fadilah</span>
        </div>
        <div className="bg-[#282828] rounded-md p-2 flex items-center gap-2">
          <Image
            src="https://secure.gravatar.com/avatar/ab9bea5980445dd777e0e4d372ff689d?s=200&r=g"
            width={48}
            height={48}
            className="rounded-md object-cover"
            alt="Juicy Luicy"
          />
          <span className="font-medium text-sm">Juicy Luicy - Koleksi Lengkap</span>
        </div>
        <div className="bg-[#282828] rounded-md p-2 flex items-center gap-2">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-md flex items-center justify-center">
            <PlusCircle className="w-6 h-6 text-white" />
          </div>
          <span className="font-medium text-sm">Liked Songs</span>
        </div>
        <div className="bg-[#282828] rounded-md p-2 flex items-center gap-2">
          <Image
            src="https://secure.gravatar.com/avatar/ab9bea5980445dd777e0e4d372ff689d?s=200&r=g"
            width={48}
            height={48}
            className="rounded-md object-cover"
            alt="Tanpa Bicara"
          />
          <span className="font-medium text-sm">Tanpa Bicara</span>
        </div>
      </div>

      {/* Podcast Preview */}
      <div className="mt-4 px-2 space-y-2">
        <div className="flex items-center gap-3">
          <Image
            src="https://secure.gravatar.com/avatar/ab9bea5980445dd777e0e4d372ff689d?s=200&r=g"
            width={40}
            height={40}
            className="rounded-full"
            alt="Podcast"
          />
          <div>
            <p className="text-[#b3b3b3] text-xs">You might like Kita dan Waktu</p>
            <h2 className="font-bold text-sm">Eps 424 - Terima kasih atas perjalanannya</h2>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://dl.swasthi.app/al.jpg"
            width={800}
            height={400}
            className="w-full rounded-md object-cover"
            alt="Episode"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-md"></div>
          <button className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full">
            <Share2 className="w-4 h-4" />
          </button>
          <Link 
            href="/wedding"
            className="absolute inset-0 flex items-center justify-center"
          >
            <button className="bg-black bg-opacity-70 text-white font-bold py-3 px-8 rounded-full shadow-lg backdrop-blur-sm hover:bg-opacity-80 transition-all duration-200">
              Wedding Invitation 💍
            </button>
          </Link>
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-4">
            <button className="hover:text-white text-[#b3b3b3]">
              <PlusCircle className="w-6 h-6" />
            </button>
            <button className="hover:text-white text-[#b3b3b3]">
              <MoreHorizontal className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#b3b3b3]">Episode • Min</span>
            <button className="bg-white text-black p-2 rounded-full">
              <Play className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}