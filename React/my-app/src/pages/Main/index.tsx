
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { PostList } from "../../components/Posts/List";
import { posts } from "../../mocks";

export const Main = () => {
  return (
    <Container>
      <Header />
      <PostList posts={posts} />
    </Container>
  );
};