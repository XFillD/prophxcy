import { getBeatsByTitle } from "@/actions/getBeatsByTitle";
import SearchInput from "@/components/SearchInput";
import { Header } from "@/components/Header";

import SearchContent from "./components/SearchContent";

export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string };
}

const Search = async ({ searchParams }: SearchProps) => {
  const beats = await getBeatsByTitle(searchParams.title);

  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent beats={beats} />
    </div>
  );
};

export default Search;
