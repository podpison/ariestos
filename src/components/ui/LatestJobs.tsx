import { useSelector } from 'react-redux';
import { selectJobItems } from '../../redux/selectors';
import { CarouselBase } from './carouselBase/CarouselBase';

type Props = {
  itemsPerPortion?: number
  mt?: boolean
}

export const LatestJobs: React.FC<Props> = ({ mt = true, itemsPerPortion = 3 }) => {
  let items = useSelector(selectJobItems);

  return <CarouselBase
    heading='Latest Portfolio Jobs.'
    categoriesHeading='Job Categories'
    arrowLeftSign='Previous jobs'
    arrowRightSign='next jobs'
    itemsPerPortion={itemsPerPortion}
    items={items}
    mt={mt}
  />
};