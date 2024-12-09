import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-two.png";
import benefitTwoImg from "../../public/img/benefit-one.png";

const benefitOne = {
  title: "Simplified home ownership",
  desc: "First time homeowner or just needing to learn more about a new purchase? We have the solution for you.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Maintenance notification management",
      desc: "Optimally perform regular mainteance for appliances. Dishwasher, fridge, HVAC, and more.",
      icon: <FaceSmileIcon className="text-primary" />,
    },
    {
      title: "Specialized appliance care plans",
      desc: "Get access to a personalized care plan without scouring manuals and forums.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Organized access to more information from the manufacturer",
      desc: "Get detailed summaries of where your information is derived from.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "All-in-one interface.",
  desc: "Sleek user interface to learn more about your home.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Desktop & Mobile",
      desc: "Seamlessly monitor your appliances from your desktop or mobile device.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Integrate with calendar of your choice",
      desc: "Google calendar, Apple Calendar, Outlook",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Built in AI assistant",
      desc: "Access to a built in AI assistant to help you with your appliances when you need it most.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
