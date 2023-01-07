import { NavLink } from "./NavLink";
import { Separator } from "./Separator";

const links = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/',
    isAnotherWebsite: true,
  },
  {
    name: 'reddit',
    link: 'https://www.reddit.com/',
    isAnotherWebsite: true,
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/',
    isAnotherWebsite: true,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/',
    isAnotherWebsite: true,
  },
  {
    name: 'privacy & policy',
    link: '/terms&conditions',
    isAnotherWebsite: false,
  },
];

export const Footer: React.FC = () => {
  let Links = links.map((l, index) => {
    if (l.isAnotherWebsite) {
      return <a href={l.link} target="_blank" rel="noopener noreferrer" key={index}>
        <h6 className="primary-hover">{l.name}</h6>
      </a>
    } else {
      return <NavLink className="md:last:ml-auto" to={l.link} key={index}>
        <h6 className="primary-hover">{l.name}</h6>
      </NavLink>
    }
  });

  return <footer className="relative mt-20 pb-10">
    <div className="flex flex-wrap gap-5 pb-[60px] max-md:justify-center sm:pb-[70px] md:pb-20 lg:pb-[90px]">
      {Links}
    </div>
    <Separator className="w-full h-px left-0" />
    <p className="text-center pt-7 sm:pt-10 md:pt-12 lg:pt-[60px]">all rights reserved by
      <span className="text-primary border-b-2 border-b-primary"> PIXIRHY</span>
    </p>
  </footer>
};