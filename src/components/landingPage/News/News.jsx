import news from "../../../assets/news.png";
import InfoSecond from "../../generalComponent/InfoSecond";

function News() {
  return (
    <div className="py-12">
      <h4 className="text-[32px] font-bold leading-[40px] mb-8">
        Latest News and Updates
      </h4>
      <InfoSecond
        title="Admissions are currently ongoing"
        text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis."
        image={news}
      />
    </div>
  );
}

export default News;
