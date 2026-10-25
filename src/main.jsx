import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

class StartupBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error) {
    console.error("Website render failure:", error);
  }
  render() {
    if (this.state.error) {
      return <main style={{ padding: 24, fontFamily: "sans-serif", color: "#8b1e1e", background: "#fff", minHeight: "100vh" }}>
        <h2>वेबसाइट लोड नहीं हो सकी</h2>
        <p>तकनीकी त्रुटि:</p>
        <pre style={{ whiteSpace: "pre-wrap" }}>{String(this.state.error?.message || this.state.error)}</pre>
      </main>;
    }
    return this.props.children;
  }
}

const root = document.getElementById("root");
if (!root) {
  document.body.innerHTML = "<h2 style='padding:24px'>Website error: root element missing</h2>";
} else {
  createRoot(root).render(
    <StartupBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StartupBoundary>
  );
}
