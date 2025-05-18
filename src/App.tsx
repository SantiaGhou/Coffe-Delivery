import { OrderProvider } from './contexts/OrderContext';
import Routes from './Routes';

export function App() {
  return (
    <OrderProvider>
      <Routes />
    </OrderProvider>
  );
}