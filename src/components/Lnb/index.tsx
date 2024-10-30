import TopicsLnb from "src/components/Lnb/TopicsLnb";
import { useLocation } from "react-router-dom";
import SearchLnb from "@/components/Lnb/SearchLnb";
import styled from "@emotion/styled";

type LNB_URLS = {
  path: string;
  type: "EXACT" | "START" | "REG";
  pattern?: RegExp;
};

const TOPICS_LNB_URLS: LNB_URLS[] = [
  { path: "/", type: "EXACT" },
  { path: "/topics", type: "START" },
];
const SEARCHS_LNB_URLS: LNB_URLS[] = [
  { path: "/search/photos/", type: "REG", pattern: /^\/search\/photos\/.*$/ },
  {
    path: "/search/collections/",
    type: "REG",
    pattern: /^\/search\/collections\/.*$/,
  },
  { path: "/search/users/", type: "REG", pattern: /^\/search\/users\/.*$/ },
];

const Lnb = () => {
  const { pathname } = useLocation();

  const { isTopicsLnb, isSearchsLnb } = getLnbStatus(pathname);

  return (
    <Container>
      {isTopicsLnb && <TopicsLnb />}
      {isSearchsLnb && <SearchLnb />}
    </Container>
  );
};

const isLnbUrls = (pathname: string, lnbUrls: LNB_URLS[]) => {
  return lnbUrls.some(({ path, type, pattern }) => {
    switch (type) {
      case "START":
        return pathname.startsWith(path);
      case "EXACT":
        return path === pathname;
      case "REG":
        return pattern?.test(pathname) ?? false;
      default:
        return false;
    }
  });
};
const getLnbStatus = (pathname: string) => {
  const isTopicsLnb = isLnbUrls(pathname, TOPICS_LNB_URLS);
  const isSearchsLnb = isLnbUrls(pathname, SEARCHS_LNB_URLS);
  return { isTopicsLnb, isSearchsLnb };
};

const Container = styled.div``;
export default Lnb;
