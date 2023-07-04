import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { EmailSchema } from "../../zod.schema";
import { Email } from "../../type";

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
  const navigate = useNavigate();
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Email>({ resolver: zodResolver(EmailSchema) });

  const onSubmit = (data: Email) => {
    console.log("🚀 ~ file: NewsletterModal.tsx:48 ~ formSubmit ~ data:", data);
    // Submit data to backend
    reset();
    navigate("/success");
  };

  return (
    <div className="bg-white lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:p-6 lg:rounded-[36px] lg:gap-x-10 lg:w-fit">
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
        <h1 className="text-heading-mobile lg:text-heading-desktop font-bold mb-6">
          Stay updated!
        </h1>
        <p className="mb-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="space-y-2.5 mb-10 ">
          {listItemData.map((item) => (
            <ListItem key={item.id} content={item.content} />
          ))}
        </ul>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <div className="flex justify-between items-center">
              <label className="text-body-small font-bold" htmlFor="email">
                Email address
              </label>
              {errors?.email && (
                <span
                  id="email-error"
                  className="text-body-small font-bold text-red-400"
                >
                  Valid email required
                </span>
              )}
            </div>
            <input
              className={`w-full border ${
                !errors?.email
                  ? "bg-transparent text-dark-navy border-light-gray hover:border-dark-navy focus:border-dark-navy placeholder:text-light-navy placeholder:hover:text-dark-navy placeholder:focus:text-dark-navy"
                  : "border-red-400 hover:border-red-400 focus:border-red-400 placeholder:text-red-400 placeholder:hover:text-red-400 placeholder:focus:text-red-400"
              } rounded-lg px-6 py-4 mt-2 mb-6 transition-colors duration-300 bg-[#FF615526] text-red-400`}
              type="email"
              id="email"
              placeholder="email@company.com"
              aria-invalid={errors?.email ? "true" : "false"}
              aria-errormessage="email-error"
              {...register("email")}
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
