import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { FullPost } from "../../components/FullPost";
import { Header } from "../../components/Header";
import { IPost } from "../../components/Types/post";


export const SelectedPost = () => {
  const params = useParams();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/${params.id}`
    );

    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setPost(values);
      });
  }, []);

  return (
    <Container>
      <Header />
      {post ? <FullPost {...post} /> : null}
    </Container>
  );
};