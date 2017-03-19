import { Frame, FrameString } from "hclang";
export { Frame } from "hclang";

const makeElement = (node: any): Frame => {
  const tagName = node.tagName;
  const attributes = node.attributes;
  const children = node.children;
  const content = node.content;

  return Frame.nil;
};

export const translate = (node: any): Frame => {
  const type = node.type;
  switch (type) {
    case "Element":
      return makeElement(node);
    case "Comment":
      return Frame.nil;
    case "Text":
      return new FrameString("Text");
    default:
      console.error(`Invalid type [${type}] for Node ${node}`);
      return Frame.nil;
  }
};
