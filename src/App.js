import './App.css';
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, Container } from 'react-bootstrap';

import DeliveryComponent from './components/DeliveryComponent';
import PaymentComponent from './components/PaymentComponent';
import PlaceOrder from './components/PlaceOrderComponent';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container 
        fluid="md"
        style={{ height: "100vh" }}
        className="py-5 d-flex"
      >
        <div
          className='payment-information rounded col-md-7 col-sm-7 col-xs-12 p-3'
        >
          <DeliveryComponent />
          <PaymentComponent />
          
        </div>

        <div
          className='order-action rounded col-md-5 col-sm-5 col-xs-12 p-3'
        >
          <PlaceOrder />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
