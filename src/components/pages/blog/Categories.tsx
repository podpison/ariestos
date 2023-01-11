import { useSelector } from "react-redux";
import { selectBlogItems } from "../../../redux/selectors";
import { BlogCategory } from "../../ui/blogCategory/BlogCategory";
import { Skeleton } from '../../ui/Skeleton';

export const Categories: React.FC = () => {
  let Items = useSelector(selectBlogItems).map((i, index) => <BlogCategory {...i} key={index} />);

  return <section className='mt100to200'>
    <div className="flex flex-col gap-y-24 sm:gap-y-28 md:gap-y-32 lg:gap-y-40">
      <Skeleton className="h-[500px]" count={3} items={Items} />
    </div>
  </section>
};