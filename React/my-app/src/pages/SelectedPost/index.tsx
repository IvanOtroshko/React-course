import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { PostList } from "../../components/Posts/List";
import { posts } from "../../mocks";

export const SelectedPost = () => {
  return (
    <Container>
        <Header/>
        <div>
            <h1>
                Selected Post
            </h1>
        </div>
        <PostList posts={posts}/>
    </Container>
  );
};