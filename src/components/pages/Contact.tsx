import { useScrollTop } from '../../hooks/useScrollTop';
import { ContactUs } from "../ui/contactUs/ContactUs";

export const ContactPage: React.FC = () => {
  useScrollTop();

  return <main>
    <ContactUs mt={false} />
  </main>
};