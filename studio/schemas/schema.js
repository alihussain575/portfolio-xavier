import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import skill from "./skill";
import project from "./project";
import tag from "./tag";

export default createSchema({
	name: "default",
	types: schemaTypes.concat([skill, project, tag])
});
