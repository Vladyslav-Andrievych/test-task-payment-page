import Header from '@features/PaymentDetails/components/Header';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import PaycardForm from '@features/PaymentDetails/components/PaycardForm';
import OrderInfo from '@features/PaymentDetails/components/OrderInfo';

import './index.scss';

const PaymentDetails: React.FC = () => (
  <main className="payment-content">
    <div className="payment">
      <Header />

      <div className="payment-actions">
        <Button variant="contained" startIcon={<AppleIcon />}>
          Pay
        </Button>

        <div className="payment-actions__divider">
          <hr />
          <span>or pay with card</span>
          <hr />
        </div>

        <PaycardForm />

        <p className="payment-actions__info">
          You'll have your <span>Plan Pro during 1 year</span>. After this period of time, your plan
          will be <span>automatically renewed</span> with its original price without any discounts
          applied.
        </p>
      </div>

      <OrderInfo />
    </div>
  </main>
);

export default PaymentDetails;
