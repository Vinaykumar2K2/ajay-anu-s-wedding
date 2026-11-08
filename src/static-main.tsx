import { createRoot } from "react-dom/client";
import { Index } from "./routes/index";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("The invitation root element was not found.");
}

createRoot(root).render(<Index />);
