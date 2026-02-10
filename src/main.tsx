import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/main.scss';
import App from '@/App';

const prepare = async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import('@/mocks/browser');
    return worker.start({ onUnhandledRequest: 'bypass', quiet: true });
  }
};

(async () => {
  await prepare();
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
})();
