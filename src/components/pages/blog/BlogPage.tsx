import { useScrollTop } from "../../../hooks/useScrollTop";
import { HeroBase } from "../../ui/heroBase/HeroBase";
import heroImg from '../../../assets/imgs/pages/blog/hero.webp';
import { useStaticItems } from './../../../hooks/useStaticItems';
import { Categories } from "./Categories";

export const BlogPage: React.FC = () => {
  useScrollTop();
  useStaticItems('blog');

  return <main>
    <HeroBase signClassName="max-w-[10em]" sign="insight, resources and stories." src={heroImg} />
    <Categories />
  </main>
};