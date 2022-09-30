import { PostItem } from "../Posts/Item";
import { IPost } from "../Types/post";


export const FullPost = (props: IPost) => {
  return <PostItem {...props} isLarge={true} />;
};