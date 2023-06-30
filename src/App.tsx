import NewsletterModal from "./components/newsletter-modal";
import ConfirmationModal from "./components/confirmation-modal";

function App() {
  return (
    <div className="lg:fixed inset-0 lg:flex lg:justify-center lg:items-center">
      {/* <NewsletterModal />  */}
      <ConfirmationModal />
    </div>
  );
}

export default App;
