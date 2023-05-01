// import createSchema from "part:@sanity/base/schema-creator";
// import schemaTypes from "all:part:@sanity/base/schema-type";
import content from "./content";
import intro from "./intro";
import about from "./about";
import contact from "./contact";
import skill from "./skill";
import project from "./project";
import tag from "./tag";
import spareTime from './spare'

// export default createSchema({
// 	name: "default",
// 	types: schemaTypes.concat([content, intro, about, contact, skill, project, tag])
// });

export const schemaTypes = [content, intro, about, contact, skill, project, tag, spareTime]
