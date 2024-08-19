
import { SwiperSlide } from "swiper/react";
import Select from "~/components/atoms/Select";
import Answer from "~/components/molecule/Answer";
import BoxContent from "~/components/molecule/BoxContent";
import Carousel from "~/components/molecule/Carousel";
import HardQuestion from "~/components/molecule/HardQuestion";
import { carousels, selectClass } from "~/fakes";

function Home() {
  return <div style={{ width: '100%', overflow: 'hidden' }}>
    <BoxContent title={' Giải bài tập Môn Vật Lý'} context={'Chuyên trang hỏi đáp & giải bài tập online Môn Vật Lý miễn phí nhanh chóng và chính xác bởi các thầy cô và các bạn học sinh ưu tú'} />
    <Carousel>
      {carousels.map((item, index) => (
        <SwiperSlide>
          <a href={item.href} className="itemcarousel">
            <img key={index} src={item.img} alt="" />
          </a>
        </SwiperSlide>
      ))}
    </Carousel>
    <HardQuestion />
    <Answer />
  </div>;
}

export default Home;
