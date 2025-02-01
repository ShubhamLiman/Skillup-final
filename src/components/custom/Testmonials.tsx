import ReviewCard from "./Testmonialcard";
import person from "../../assets/Ellipse 1.svg";
import person2 from "../../assets/Ellipse 1 (1).svg";
import person3 from "../../assets/Ellipse 1 (2).svg";
import person4 from "../../assets/blackwomen.svg";
import bg from "../../assets/Group 39875.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testmonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ppl = [
    {
      profile: person,
      name: "Wade Warren",
      role: "UI/UX Designer @Microsoft",
      comment: "Awesome website and funnel for your business",
    },
    {
      profile: person4,
      name: "Nicole Champlin",
      role: "UI/UX Designer @Microsoft",
      comment: "Couldn’t agree more to this product! ",
    },
    {
      profile: person2,
      name: "Elias Watsica",
      role: "UI/UX Designer @Microsoft",
      comment: "Super recommended product. You have to try!",
    },
    {
      profile: person3,
      name: "Theresa Conroy",
      role: "UI/UX Designer @Microsoft",
      comment: "I cannot believe my eyes, this is real!",
    },
  ];

  return (
    <div className="my-[120px] flex flex-col items-center gap-[60px]">
      <div className="flex w-[372.8px] p-[17.077px] items-center gap-[27.323px] rounded-[6.831px] bg-[#FFF] [box-shadow:34.154px_23.908px_68.308px_0px_rgba(0,_0,_0,_0.08)]">
        <div className="flex flex-row gap-[3.42px] items-center">
          <div className="flex w-[33.727px] h-[33.727px] p-[3.415px] justify-center items-center gap-[17.077px] bg-[#00B57A]">
            <img src={bg} alt="star" />
          </div>
          <div className="flex w-[33.727px] h-[33.727px] p-[3.415px] justify-center items-center gap-[17.077px] bg-[#00B57A]">
            <img src={bg} alt="star" />
          </div>
          <div className="flex w-[33.727px] h-[33.727px] p-[3.415px] justify-center items-center gap-[17.077px] bg-[#00B57A]">
            <img src={bg} alt="star" />
          </div>
          <div className="flex w-[33.727px] h-[33.727px] p-[3.415px] justify-center items-center gap-[17.077px] bg-[#00B57A]">
            <img src={bg} alt="star" />
          </div>
          <div className="flex w-[33.727px] h-[33.727px] p-[3.415px] justify-center items-center gap-[17.077px] bg-[#00B57A]">
            <img src={bg} alt="star" />
          </div>
        </div>
        <div className="text-[#868686] font-[Manrope] text-[26px] not-italic font-bold leading-[25.616px]">
          5.0 Rating
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-[45px]">
        {ppl.map((person, i) => (
          <ReviewCard
            key={i}
            profile={person.profile}
            name={person.name}
            role={person.role}
            comment={person.comment}
          />
        ))}
      </div>
      {/* <div className="flex w-full mx-auto h-auto items-center justify-between overflow-scroll gap-12 no-scrollbar">
        <Slider {...settings}>
          <div>Slide1</div>
          <div>Slide2</div>
          <div>Slide3</div>
          <div>Slide4</div>
        </Slider>
      </div> */}
    </div>
  );
}

export default Testmonials;
