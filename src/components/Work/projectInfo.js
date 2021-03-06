import CareerShockImg from "../../assets/CareerShock.svg";

const projectInfo = [
  {
    title: "Junior Developer Job Board",
    text: [
      "Using Recoil for state management and implementing global themes with styled-components.",
      "Building unit and integration tests with React Testing Library and Jest.",
      "Shipping code bi-weekly following agile methodologies and pair programming on a remote team of 6 across 3 time zones using Zoom, Trello, and Slack.",
    ],
    links: [
      // { display: "Just because", href: "/", className: 'deployment' },
      // {pipe: 'pipe'},
      { display: "", className: "deployment" },
      { pipe: "pipe" },
      {
        display: "Repo Link",
        href: "https://github.com/JS-Jr-Dev-Job-Board/react",
        className: "repo",
      },
      { pipe: "pipe" },
      // { display: "Demo Video", className: "demo" },
    ],
    image: CareerShockImg,
  },
  // {
  //   title: "Driftwood",
  //   text: "A node and handlebars app",
  //   links: [
  //     {
  //       display: "Repo Link",
  //       href: "https://reisman-weather-application.herokuapp.com/",
  //       className: "repo",
  //     },
  //     { pipe: "pipe" },
  //     {
  //       display: "Deployment Link",
  //       href: "https://github.com/BrianReisman/node-weather-app",
  //       className: "deployment",
  //     },
  //     // { pipe: "pipe" },
  //     // { display: "Demo Video", href: "/", className: "demo" },
  //   ],
  //   image: "",
  // },
];

export default projectInfo;
