import React from 'react';

import CardItem from 'components/shared/card-item';
import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';
import GuideSvg from 'icons/guide.inline.svg';
import InstallFestSvg from 'icons/installfest.inline.svg';
import IntroSvg from 'icons/intro.inline.svg';

const title = 'Discover Cilium';
const items = [
  {
    icon: IntroSvg,
    name: 'Weekly Interactive Cilium Introduction and Live Q&A',
    text: 'with Thomas Graf, Cilium Co-Creator',
    buttons: [
      {
        buttonUrl: 'https://calendly.com/cilium-events/cilium-introduction',
        buttonText: 'Book your seat',
        isPopup: true,
      },
    ],
  },
  {
    icon: InstallFestSvg,
    name: 'Weekly Community InstallFest',
    text: 'Join us at our weekly InstallFest and learn how to setup and get started with Cilium.',
    buttons: [
      {
        buttonUrl: 'https://calendly.com/cilium-events/cilim-installfest-emea',
        buttonText: 'Join Europe',
        isPopup: true,
      },
      {
        buttonUrl: 'https://calendly.com/cilium-events/cilium-installfest-na',
        buttonText: 'Join Americas',
        isPopup: true,
      },
    ],
  },
  {
    icon: GuideSvg,
    name: 'Do it yourself Tutorials',
    text: 'Check out the Cilium documentation to quickly get started on a Kubernetes cluster of your choice.',
    buttons: [
      {
        buttonUrl: 'https://docs.cilium.io/en/stable/',
        buttonText: 'Learn more',
        buttonTarget: '_blank',
      },
    ],
  },
];

const Discover = () => (
  <section className="mt-12 md:mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 gap-4 mt-6 md:gap-6 xl:gap-8 md:mt-10 md:grid-cols-3 lg:mt-14">
        {items.map((item, index) => (
          <CardItem size="sm" {...item} key={index} />
        ))}
      </div>
    </Container>
  </section>
);
export default Discover;
