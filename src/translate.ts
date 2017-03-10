// import * as frame from "hclang";

export const translate = (node: any) => {
  const type = node.type;
  switch (type) {
    case "Element":
      return "Element";
    case "Comment":
      return "Comment";
    case "Text":
      return "Text";
    default:
      console.error(`Invalid type [${type}] for Node ${node}`);
  }
  return node;
};
