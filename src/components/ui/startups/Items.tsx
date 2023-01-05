import { StartupType } from "../../../redux/reducers/static";

type Props = {
  startups: StartupType[]
  category: string | undefined
}

export const Items: React.FC<Props> = ({ startups, category }) => {
  let categoryItems = startups.filter(s => s.category === category);
  let CategoryItems = categoryItems.map((c, index) => {
    return <div key={index}>
      {c.name}
    </div>
  })

  return <div className="mt-14">
    {CategoryItems}
  </div>
};