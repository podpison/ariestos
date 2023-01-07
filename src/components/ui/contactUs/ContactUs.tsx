import { Form } from "./form/Form";
import cn from 'classnames';

type Props = {
  mt?: boolean
}

export const ContactUs: React.FC<Props> = ({ mt = true }) => {
  return <section className={cn("grid grid-cols-1 gap-x-[5%] md:grid-cols-[55%_40%]", mt && 'mt100to200')} id='contactUs' style={{scrollMarginTop: '120px'}}>
    <div>
      <h2 className="angular-gradient-text">we help you to turn ideas into reality.</h2>
      <p className="mt-5 sm:mt-7 md:mt-8 md:max-w-lg lg:mt-10">if your research processes have unique features, and you are looking for an individual funding solution - we can help.</p>
    </div>
    <Form />
  </section>
};