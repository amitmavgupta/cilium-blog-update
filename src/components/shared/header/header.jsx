import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import SlackIcon from 'icons/slack.inline.svg';
import Logo from 'images/logo.inline.svg';

import Button from '../button';
import Container from '../container';
import GithubStars from '../github-stars';
import Link from '../link';

const navigation = [
  { name: 'Enterprise', href: '/enterprise' },
  { name: 'Learn', href: '/learn' },
  { name: 'Blog', href: '/blog' },
  { name: 'Documentation', href: 'https://docs.cilium.io/en/stable/' },
];

const themeClassNames = {
  white: 'bg-white',
  gray: 'bg-gray-4',
};

const Header = ({ theme }) => (
  <div className={classNames('py-5', themeClassNames[theme])}>
    <Popover>
      {({ open }) => (
        <>
          <Container size="lg">
            <nav
              className="relative flex items-center justify-end w-full sm:h-10"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <div className="flex items-center">
                    <Link to="/">
                      <span className="sr-only">Cilium</span>
                      <Logo />
                    </Link>
                    <GithubStars className="hidden ml-4 lg:inline-block md:ml-8 bg-white" />
                    <Button
                      className="items-center hidden ml-4 leading-none lg:inline-flex bg-white"
                      to="https://cilium.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      theme="outline-gray"
                      size="xs"
                    >
                      <SlackIcon className="w-4 h-4 mr-1.5" />
                      <span>Join Slack</span>
                    </Button>
                  </div>
                  <div className="flex items-center -mr-2 lg:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-1.5 text-black rounded-md hover:text-gray-1 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-7 h-7" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <ul className="hidden lg:flex lg:space-x-7 xl:space-x-11 lg:items-center">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      type="text"
                      theme="black"
                      to={item.href}
                      target={item.target || null}
                      rel={item.target ? 'noopener noreferrer' : null}
                      className="text-base font-bold leading-none"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              className="absolute inset-x-0 top-0 z-20 transition origin-top-right transform lg:hidden"
              // click outside logic is broken, it will be fixed in the next release https://github.com/tailwindlabs/headlessui/issues/283
              tabIndex={-1}
              focus
              static
            >
              <div className="overflow-hidden bg-white">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <span className="sr-only">Cilium</span>
                    <Logo />
                  </div>
                  <div className="-mr-3">
                    <Popover.Button className="inline-flex p-1.5 items-center justify-center text-black bg-white rounded-md hover:text-gray-1 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-7 h-7" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center px-2 pb-11 mt-11">
                  <ul className="flex flex-col justify-center space-y-9">
                    {navigation.map((item) => (
                      <li className="text-center" key={item.name}>
                        <Link
                          to={item.href}
                          target={item.target}
                          theme="black"
                          type="text"
                          className="text-base font-bold leading-none  rounded-md"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="inline-flex items-center leading-none mt-9"
                    to="https://cilium.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    theme="outline-gray"
                    size="xs"
                  >
                    <SlackIcon className="w-4 h-4 mr-1.5" />
                    <span>Join Slack</span>
                  </Button>
                  <GithubStars className="mt-9" />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
          <Popover.Button
            className={classNames(
              'fixed inset-0 transition-colors z-10 duration-200 bg-black bg-opacity-50',
              open ? 'opacity-100 visible w-full h-full' : 'opacity-0 invisible'
            )}
          />
        </>
      )}
    </Popover>
  </div>
);

Header.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
};

Header.defaultProps = {
  theme: 'white',
};

export default Header;
