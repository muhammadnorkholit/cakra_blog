import ListPost from "@/components/ListPost";
import FrontWrapper from "@/components/layouts/FrontWrapper";
import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";

const fetchData = async () => {
  try {
    const { data } = await axios.get(`/posts`);

    return data?.data || [];
  } catch (error) {
    // console.log(error);
  }
};

export default async function Home() {
  const articles = await fetchData();

  return (
    <FrontWrapper>
      <section className="hero container min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-5xl mb-4  font-bold">
          Your History And Share With Us
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
          accusamus repellat ullam? Aperiam, ratione cum! Praesentium explicabo
          eius porro dolorem!
        </p>
        <div className="flex gap-2">
          <Button>Browse Trending</Button>
          <Button variant={"outline"}>Create Post</Button>
        </div>
      </section>

      <section>
        <div className="container  border rounded-sm px-0 py-2">
          <ListPost articles={articles} title="Trending" />
        </div>
      </section>
    </FrontWrapper>
  );
}
