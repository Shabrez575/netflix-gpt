import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TrendingNow = () => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const swiperRef = useRef(null);

  const trendingVideos = [
    { id: 1, thumbnail: 'https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg', title: 'Movie 1' },
    { id: 2, thumbnail: 'https://i.ytimg.com/vi/0VH9WCFV6XQ/maxresdefault.jpg', title: 'Movie 2' },
    { id: 3, thumbnail: 'https://i.ytimg.com/vi/oqxAJKy0ii4/maxresdefault.jpg', title: 'Movie 3' },
    { id: 4, thumbnail: 'https://i.ytimg.com/vi/ONPT9s9oF9g/maxresdefault.jpg', title: 'Movie 4' },
    { id: 5, thumbnail: 'https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg', title: 'Movie 5' },
    { id: 6, thumbnail: 'https://i.ytimg.com/vi/0VH9WCFV6XQ/maxresdefault.jpg', title: 'Movie 6' },
    { id: 7, thumbnail: 'https://i.ytimg.com/vi/oqxAJKy0ii4/maxresdefault.jpg', title: 'Movie 7' },
    { id: 8, thumbnail: 'https://i.ytimg.com/vi/ONPT9s9oF9g/maxresdefault.jpg', title: 'Movie 8' },
  ];

  const handleSwiperChange = swiper => {
    setCanScrollPrev(!swiper.isBeginning);
    setCanScrollNext(!swiper.isEnd);
  };

  return (
    <div className="relative -mt-20 z-10">
      {/* Curved dark blue background */}
      <div
        className="bg-[#0f0f2d] pt-16 pb-10 px-4 text-white relative"
        style={{
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          marginTop: '-20px',
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Trending Now</h2>

        {/* Arrows */}
        {canScrollPrev && (
          <button
            className="absolute z-20 left-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-60 hover:bg-opacity-90 rounded-full"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <span className="text-6xl font-bold">‹</span>
          </button>
        )}
        {canScrollNext && (
          <button
            className="absolute z-20 right-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-60 hover:bg-opacity-90 rounded-full"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <span className="text-6xl font-bold">›</span>
          </button>
        )}

        {/* Swiper Carousel */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSwiperChange}
          onReachEnd={() => setCanScrollNext(false)}
          onReachBeginning={() => setCanScrollPrev(false)}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          modules={[Navigation]}
          className="py-4"
        >
          {trendingVideos.map(video => (
            <SwiperSlide key={video.id}>
              <div className="rounded overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover rounded" />
                <p className="mt-2 text-sm text-center">{video.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingNow;
