import { ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../../api/posts";
import { Button } from "../Button";
import { Input } from "../Input";
import { PostList } from "../Posts/List";
import { IPost } from "../Types/post";
import style from "./style.module.css";

export const AllPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);

    fetchPosts(searchText, posts.length)
      .then((values) => {
        if (values.count > values.results.length) {
          setShowLoadMore(true);
        } else {
          setShowLoadMore(false);
        }

        setPosts(values.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchText]);

  const loadMore = () => {
    const promise = fetchPosts(searchText, posts.length);

    promise.then((values) => {
      console.log({ values });

      if (values.results.length + posts.length === values.count) {
        setShowLoadMore(false);
      }

      setPosts(posts.concat(values.results));
    });
  };

  const navigateToSelectedPost = (postId: number) => {
    navigate(`/selected-user/${postId}`);
  };

  const hangleSearchText: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Input value={searchText} onChange={hangleSearchText} type={"login"} />
      {isLoading ? (
        <div style={{ width: 100, height: 100, background: "#000" }} />
      ) : (
        <>
          <PostList posts={posts} onClickPost={navigateToSelectedPost} />
          {showLoadMore ? (
            <Button
              text="Загрузить еще"
              onClick={loadMore}           
            />
          ) : null}
        </>
      )}
    </>
  );
};