import * as frame from "hclang";

export const translate = (node: any) => {
  const type = node.type;
  switch (type) {
    case "Element":
      return "Element";
    case "Comment":
      return frame.Frame.nil;
    case "Text":
      return new frame.FrameString("Text");
    default:
      console.error(`Invalid type [${type}] for Node ${node}`);
  }
  return node;
};
