import { sidebar } from "vuepress-theme-hope";
import { programmer } from "./programmer";
import { programming } from "./programming";
import { frontend } from "./frontend";
import { backend } from "./backend";
import { trending } from "./trending";
import { article } from "./article";
import { interview } from "./interview";
import { leetcode } from "./leetcode";
import { awesome } from "./awesome";
import { digest } from "./digest";

export default sidebar({
  "/programmer/": programmer,
  "/programming/": programming,
  "/frontend/": frontend,
  "/backend/": backend,
  "/trending/": trending,
  "/article/": article,
  "/interview/": interview,
  "/leetcode/": leetcode,
  "/awesome/": awesome,
  "/digest/": digest,

  // --- fallback ---
  "/": ["", "guide"],
});
