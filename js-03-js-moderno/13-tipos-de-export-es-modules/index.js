import { inline } from "./inline.js";
import defaultInline from "./inline.js"; // A diferença é que o export default só pode ter um por arquivo. 
import exportDefault, {group} from "./non-inline.js";

inline();
defaultInline();

group();
exportDefault();