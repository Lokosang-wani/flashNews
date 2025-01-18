import { ArticleApi } from "./api/article-api";


export default async function MainPage() {
  console.log("ENV API KEY accessible on server only", process.env.API_KEY);
  const articles = await ArticleApi.fetchToday();
  return (
    <div className="">
      {JSON.stringify(articles)}
      </div>
  );
}
