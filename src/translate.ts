import { Frame, FrameComment, FrameExpr, FrameNumber, FrameString, FrameSymbol } from "hclang";
export { Frame } from "hclang";

type Attribute = { [key: string]: any; };
const makeBody = (attributes: Attribute, children: Array<any>): Frame => {
  return Frame.nil;
}

const makeElement = (node: any): Frame => {
  const tagName = node.tagName;
  const attributes = node.attributes;
  const children = node.children;
  const content = node.content;

  const array: Array<Frame> = [
    new FrameSymbol(tagName),
  ];

  if (content) {
    array.push(new FrameString(content));
  } else {
    array.push(makeBody(attributes, children));
  }
  return new FrameExpr(array);
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
