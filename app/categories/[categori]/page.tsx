import ListPost from "@/components/ListPost";
import PostCard from "@/components/PostCard";
import FrontWrapper from "@/components/layouts/FrontWrapper";
import Sidebar from "@/components/sidebar/Sidebar";
import Auth from "@/lib/Auth";
import axios from "@/lib/axios";
export async function generateStaticParams() {
  return ["c"];
}

const fetchData = async (categori: string) => {
  try {
    const { data } = await axios.get(`/`);
    return data?.articles || [];
  } catch (error) {}
};

export default async function Home({ params }: { params: any }) {
  const { categori } = params;
  const articles = await fetchData(categori);
  console.log("categori", Auth.getStatus());
  return (
    <FrontWrapper>
      <section>
        <div className="container border rounded-sm px-0 py-2">
          <ListPost articles={articles} title={categori} />
        </div>
      </section>
    </FrontWrapper>
  );
}
