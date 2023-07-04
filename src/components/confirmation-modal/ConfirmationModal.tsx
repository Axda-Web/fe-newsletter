import ButttonCta from "../button-cta";
const ConfirmationModal = () => {
  return (
    <section className="bg-white h-screen lg:h-fit px-6 pt-[150px] pb-10 lg:p-16 lg:rounded-[36px] lg:w-[504px] flex flex-col justify-between">
      <div>
        <div>
          <img
            className="block mb-10"
            src="/assets/images/icon-success.svg"
            alt="sign up illustration"
          />
        </div>
        <h3 className="text-heading-mobile lg:text-heading-desktop font-bold leading-none mb-6">
          Thanks for subscribing!
        </h3>
        <p className="mb-10">
          A confirmation email has been sent to{" "}
          <span className="font-bold">ash@loremcompany.com</span>. Please open
          it and click the button inside to confirm your subscription
        </p>
      </div>
      <ButttonCta type="button" text="Dismiss message" />
    </section>
  );
};
export default ConfirmationModal;
