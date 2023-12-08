import { sidebar } from "vuepress-theme-hope";
import { programmer } from "./programmer";
import { programming } from "./programming";
import { frontend } from "./frontend";
import { backend } from "./backend";
import { trending } from "./trending";
import { article } from "./article";

export default sidebar({
  "/programmer/": programmer,
  "/programming/": programming,
  "/frontend/": frontend,
  "/backend/": backend,
  "/trending/": trending,
  "/article/": article,
  
  // --- fallback ---
  "/": ["", "guide"],
});
