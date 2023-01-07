import { Separator } from "../../../ui/Separator";
import { Texts } from "../../../ui/texts/Texts";
import { Phase } from "./Phase";

const textsProps = {
  items: [
    'The AI Program combines a $250,000 USD investment, 180 days of hands - on collaboration, and a global founder community for early stage founders building hard-tech startups. Founders work with us across our global locations to collaborate with our in-house team of engineers, designers and entrepreneurs. Startups get access to the unparalleled experts, investors, manufacturers and supply chains to thrive as an early stage hard tech startup.',
    'We break the 180 days into 3 phases that help us rapidly scale our collaboration. This starts with a deep dive, and quickly ramps to hands-on engagement both remotely and in our offices around the world.'
  ]
}

export const HowItWorks: React.FC = ( ) => {
  return <section>
    <div className="mt100to200 max-w-[760px] mx-auto">
      <h6>AI program</h6>
      <h2 className="mt-2.5">How the program works.</h2>
      <Separator className="w-full h-px left-0" containerClassName="mt-5 sm:mt-7 md:mt-8" />
      <Texts className="pt-10 gap-y-5 md:gap-y-[30px]" {...textsProps} />
    </div>
    <div className="grid grid-cols-1 gap-y-[50px] mt-[100px] sm:grid-cols-2 sm:gap-x-[23px] md:grid-cols-3 lg:gap-x-10">
      <Phase description="Rapid product development." heading="Phase 1 (0 - 120 days)" />
      <Phase description="Growth & fundraising." heading="Phase 2 (120 - 180 days)" />
      <Phase description="Onword support & community." heading="Phase 3 (180+ days)" />
    </div>
  </section>
};