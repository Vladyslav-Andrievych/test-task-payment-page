import './index.scss';

const OrderInfo: React.FC = () => (
  <div className="payment-order-info order-info">
    {/* TO THINK: next three lines could be as a config for product info, so here could be a list (list of several products)
          but for now leaves as it is according to design */}
    <h5 className="order-info__header">{'Order info <= 100 char.'}</h5>
    <p className="order-info__description">{'Description <= 400 char.'}</p>
    <hr className="order-info__divider" />
    <p className="order-info__product-name">Lamel Professional Smart Skin Compact Powder</p>
    <p className="order-info__product-additional-description">Пудра для лица</p>
    <hr className="order-info__divider" />
    <p className="order-info__summary">5 days free</p>
    <p className="order-info__summary-additional-info">then 299.99 UAH per 14 days</p>
  </div>
);

export default OrderInfo;
