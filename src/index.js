import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRoutes from "./AppRoutes";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import reportWebVitals from "./reportWebVitals";

Sentry.init({
  dsn: "https://5e038c07a130488b9e1131b9b4509331@o1179999.ingest.sentry.io/6292448",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    
      <AppRoutes />
  
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
