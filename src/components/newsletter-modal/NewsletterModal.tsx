import { ChangeEvent, FormEvent, useState } from "react";

import ButttonCta from "../button-cta";

type ListItemProps = {
  content: string;
};

const ListItem = ({ content }: ListItemProps) => {
  return (
    <li className="flex items-start gap-x-4">
      <img
        className="block"
        src="/assets/images/icon-list.svg"
        alt="icon list"
      />
      <span>{content}</span>
    </li>
  );
};

const NewsletterModal = () => {
  const [email, setEmail] = useState("");
  const listItemData = [
    {
      id: 1,
      content: "Product discovery and building what matters",
    },
    {
      id: 2,
      content: "Measuring to ensure updates are a success",
    },
    {
      id: 3,
      content: "And much more!",
    },
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: emailValue } = event.target;
    setEmail(emailValue);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("email", email);
  };

  return (
    <div className="bg-white lg:flex lg:flex-row-reverse lg:justify-center lg:items-center  lg:p-6 lg:rounded-[36px] lg:gap-x-10 lg:w-fit">
      <div>
        <picture>
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/images/illustration-sign-up-mobile.svg"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/images/illustration-sign-up-desktop.svg"
          />
          <img
            className="block w-full"
            src="/assets/images/illustration-sign-up-desktop.svg"
            alt="sign up illustration"
          />
        </picture>
      </div>
      <div className="py-10 px-6 lg:w-[424px]">
        <h3 className="text-heading-mobile lg:text-heading-desktop font-bold mb-6">
          Stay updated!
        </h3>
        <p className="mb-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="space-y-2.5 mb-10 ">
          {listItemData.map((item) => (
            <ListItem key={item.id} content={item.content} />
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-body-small font-bold" htmlFor="email">
              Email address
            </label>
            <input
              className="w-full border border-light-gray hover:border-dark-navy focus:border-dark-navy rounded-lg px-6 py-4 mt-2 mb-6 placeholder:text-light-navy placeholder:hover:text-dark-navy placeholder:focus:text-dark-navy transition-colors duration-300"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={email}
              placeholder="email@company.com"
            />
          </div>
          <ButttonCta type="submit" text="Subscribe to monthly newsletter" />
        </form>
      </div>
    </div>
  );
};
export default NewsletterModal;

// TODO: Transition effect doesn't seems to work on the input placeholder text, fix it.
