
import FeatureSection from "../../components/featureSection";
import Image1 from "../../assets/images/icon-chat.png";
import Image2 from "../../assets/images/icon-money.png";
import Image3 from "../../assets/images/icon-security.png";
import "./style.css";
const datas = [
  {
    id: 1,
    img: Image1,
    title: "You are our #1 priority",
    text: `Need to talk to a representative? You can get in touch through our
    24/7  chat or through a phone call in less than 5 minutes.`,
  },
  {
    id: 2,
    img: Image2,
    title: "More savings means higher rates",
    text: `The more you save with us, the higher your interest rate will be!`,
  },
  {
    id: 3,
    img: Image3,
    title: "Security you can trust",
    text: ` We use top of the line encryption to make sure your data and money
    is always safe.`,
  },
];
const HomeFeatures = () => {
    return (
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {datas.map((data) => (
          <FeatureSection
            img={data.img}
            title={data.title}
            text={data.text}
            key={data.id}
          />
        ))}
      </section>
    );
  };
  
  export default HomeFeatures;