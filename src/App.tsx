import Navigation from '@features/Navigation';
import LanguageToggler from '@features/LanguageToggler';
import PaymentDetails from '@features/PaymentDetails';
import Footer from '@common/components/Footer';

import '@common/styles/common.scss';
import '@common/styles/layout.scss';

const App: React.FC = () => (
  <div className="page">
    <Navigation />
    <LanguageToggler />
    <PaymentDetails />
    <Footer />
  </div>
);

export default App;
