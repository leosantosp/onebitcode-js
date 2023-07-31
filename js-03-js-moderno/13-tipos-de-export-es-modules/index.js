import { inline } from "./inline.js";
import defaultInline from "./inline.js"; // A diferença é que o export default só pode ter um por arquivo. 

inline();
defaultInline();

group();
exportDefault();