import TopicsLnb from "@/components/Lnb/TopicsLnb";
import { useLocation } from "react-router-dom";
import SearchLnb from "@/components/Lnb/SearchLnb";

type LNB_URLS = {
  path: string;
  type: "EXACT" | "START";
};

const TOPICS_LNB_URLS: LNB_URLS[] = [{ path: "/", type: "EXACT" }];
const SEARCH_LNB_URLS: LNB_URLS[] = [{ path: "/search/photos", type: "START" }];

const Lnb = () => {
  const { pathname } = useLocation();
  const { isTopicsLnb, isSearchLnb } = getLnbStatus(pathname);
  return (
    <>
      {isTopicsLnb && <TopicsLnb />}
      {isSearchLnb && <SearchLnb />}
    </>
  );
};

const isLnbUrls = (pathname: string, lnbUrls: LNB_URLS[]) => {
  return lnbUrls.some(({ path, type }) => {
    if (type === "START") return pathname.startsWith(path);
    return path === pathname;
  });
};

const getLnbStatus = (pathname: string) => {
  const isTopicsLnb = isLnbUrls(pathname, TOPICS_LNB_URLS);
  const isSearchLnb = isLnbUrls(pathname, SEARCH_LNB_URLS);

  return {
    isTopicsLnb,
    isSearchLnb,
  };
};

export default Lnb;
