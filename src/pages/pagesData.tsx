import NewsletterModal from "../components/newsletter-modal";
import ConfirmationModal from "../components/confirmation-modal";

const pagesData = [
  {
    path: "/",
    component: <NewsletterModal />,
    title: "home",
  },
  {
    path: "/success",
    component: <ConfirmationModal />,
    title: "authors",
  },
];

export default pagesData;
