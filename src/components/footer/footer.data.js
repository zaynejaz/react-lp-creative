import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

export default [
  {
    header: 'Company',
    items: [
      {
        path: '/',
        label: 'About',
      },
      {
        path: '/',
        label: 'Careers',
      },
      {
        path: '/',
        label: 'Contact',
      },
      {
        path: '/',
        label: 'Customers',
      },
    ],
  },
  {
    header: 'Solutions',
    items: [
      {
        path: '/',
        label: 'Accountants',
      },
      {
        path: '/',
        label: 'Affiliates',
      },
      {
        path: '/',
        label: 'Consultants',
      },
      {
        path: '/',
        label: 'Educators',
      },
    ],
  },
  {
    header: 'Resources',
    items: [
      {
        path: '/',
        label: 'Help Center',
      },
      {
        path: '/',
        label: 'FAQs',
      },
      {
        path: '/',
        label: 'Education Hub',
      },
      {
        path: '/',
        label: 'What’s New',
      },
    ],
  },
  {
    header: 'Contact',
    items: [
      {
        path: '/',
        label: 'Facebook',
        name: 'facebook',
        icon: <FaFacebook />,
      },
      {
        path: '/',
        label: 'Twitter',
        name: 'twitter',
        icon: <FaTwitter />,
      },
      {
        path: '/',
        label: 'Github',
        name: 'github',
        icon: <FaGithub />,
      },
      {
        path: '/',
        label: 'Dribbble',
        name: 'dribbble',
        icon: <FaDribbble />,
      },
    ],
  },
];
