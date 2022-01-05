import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModelProvider } from "./Models/ModelsContext";
import Routes from "./routes";
import "./styles.css";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ModelProvider>
        <Routes />
      </ModelProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  rootElement
);
