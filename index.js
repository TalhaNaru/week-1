import { double } from "./transform.js";
import { formatLine } from "./report.js";

console.log(formatLine({ name: "Test User", posts: double(5) }));