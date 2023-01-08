import { useSelector } from "react-redux";
import { selectBlogItems } from "../../../../redux/selectors";
import { Category } from "./category/Category";

export const Categories: React.FC = () => {
  let Items = useSelector(selectBlogItems).map((i, index) => <Category {...i} key={index} />);

  return <section>
    <div className="flex flex-col gap-y-24 sm:gap-y-32 md:gap-y-40 lg:gap-y-[200px]">
      {Items}
    </div>
  </section>
};