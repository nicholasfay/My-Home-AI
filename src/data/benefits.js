import {
  FaceSmileIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  HomeModernIcon,
  DocumentIcon,
  NewspaperIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-three.png";
import benefitTwoImg from "../../public/img/benefit-one.png";
import benefitThreeImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Simplified home ownership",
  desc: "First time homeowner or just needing to learn more about your home? We have the solution for you.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Maintenance plans",
      desc: "Optimally perform regular mainteance for appliances. Dishwasher, refrigerator, HVAC, and more.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Specialized care plans",
      desc: "Get access to a personalized care plan without scouring manuals and forums.",
      icon: <MinusIcon />,
    },
    {
      title: "Organized access to more information from the manufacturer",
      desc: "Get detailed summaries of where your information is derived from.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "All-in-one platform.",
  desc: "Sleek user interface that provides all of your homes information, anywhere.",
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
      desc: "Access to a built in AI assistant to help you with your home when you need it most.",
      icon: <SunIcon />,
    },
  ],
};

const benefitThree = {
  title: "Fully customizable",
  desc: "Tailor it to your needs as a homeowner, or use it to get an overview of your rental properties.",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Multi-mode support",
      desc: "Homeowner? Owner with tenants? We've got you covered.",
      icon: <HomeModernIcon />,
    },
    {
      title: "Upload your own manuals",
      desc: "Gain insights into any piece of your home. Whether that be a brand new appliance or something you've had for years.",
      icon: <DocumentIcon />,
    },
    {
      title: "Personalized notifications",
      desc: "Receive based on your preferences. Whether that be email, text, or push notifications.",
      icon: <NewspaperIcon />,
    },
  ],
};

export { benefitOne, benefitTwo, benefitThree };
