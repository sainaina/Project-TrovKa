import Categorytype from "../../components/category/CategoryType";
import Line from "../../components/category/Line";
import { Metadata } from "../../lib/Metadata";

export const Categories = () => {
  return (
    <>
      <div>
        <Metadata
          title="Category | TrovKa"
          description="Welcome to Service-TrovKa"
          author="SainaIna"
          keywords="services, trovka, home"
          thumbnail="./src/assets/logo/Trovka-icon.png"
        />
      </div>
      <Line/>
      <Categorytype/>
    </>
  );
};
