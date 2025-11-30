import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { BrowserRouter } from 'react-router';
const query = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={query}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </QueryClientProvider>,
)
