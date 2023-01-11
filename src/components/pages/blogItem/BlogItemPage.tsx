import { useScrollTop } from './../../../hooks/useScrollTop';
import { ItemContent } from './ItemContent';
import { useSelector } from 'react-redux';
import { selectBlogItems } from './../../../redux/selectors';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Skeleton } from '../../ui/Skeleton';
import { HeroBase } from '../../ui/heroBase/HeroBase';
import heroImg from './../../../assets/imgs/pages/blogItem/hero.webp';
import { ContactUs } from '../../ui/contactUs/ContactUs';
import { BlogCategory } from '../../ui/blogCategory/BlogCategory';

export const BlogItemPage: React.FC = () => {
  useScrollTop();
  const navigate = useNavigate();
  let items = useSelector(selectBlogItems);
  let { categoryId, itemId } = useParams();

  let currentCategory = items.find(i => i.id === Number(categoryId));
  let currentItem = currentCategory?.items.find(i => i.id === Number(itemId));

  useEffect(() => {
    if (!currentItem && items.length !== 0) {
      navigate('/blog');
    }
  }, [items, currentItem]);

  if (!currentItem || !currentCategory) {
    return <Skeleton className='h-[400px] mt-10' items={[]} count={1} />
  }

  let blogCategoryProps = { ...currentCategory, items: [...currentCategory.items].filter(i => i.id !== Number(currentItem?.id)) };

  return <main>
    <HeroBase signClassName='w-[10em]' sign='Insight, resources and stories.' src={heroImg} />
    <ItemContent {...currentItem} />
    <BlogCategory {...blogCategoryProps} className='mt100to200' />
    <ContactUs />
  </main>
};