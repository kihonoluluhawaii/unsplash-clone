import styled from "@emotion/styled";

interface Props {
  selected: string;
  onClick: (label: string) => void;
}

const category = [
  { name: "photos", to: "/photos", label: "Photos" },
  { name: "illustrations", to: "/illustrations", label: "Illustrations" },
  { name: "unsplash", to: "/plus/new", label: "Unsplash+" },
  {
    name: "renders",
    to: "/",
    label: "3D Renders",
  },
  {
    name: "animals",
    to: "/",
    label: "Animals",
  },
  {
    name: "architectures",
    to: "/",
    label: "Architecture & Interiors",
  },
  {
    name: "experimental",
    to: "/",
    label: "Experimental",
  },
  {
    name: "fashion",
    to: "/",
    label: "Fashion & Beauty",
  },
  {
    name: "film",
    to: "/",
    label: "Film",
  },
  {
    name: "food",
    to: "/",
    label: "Food & Drink",
  },
  {
    name: "nature",
    to: "/",
    label: "Nature",
  },
  {
    name: "people",
    to: "/",
    label: "People",
  },
  {
    name: "sports",
    to: "/",
    label: "Sports",
  },
  {
    name: "travel",
    to: "/",
    label: "Travel",
  },
  {
    name: "rising",
    to: "/",
    label: "Rising Stars",
  },
];

const Category = ({ selected, onClick }: Props) => {
  const mainCategory = category.slice(0, 3);
  const subCategory = category.slice(3);

  return (
    <Container>
      {mainCategory.map(({ name, label }) => (
        <div
          key={name}
          onClick={() => onClick(label)}
          className={selected === label ? "active" : ""}
        >
          {label}
        </div>
      ))}

      <div className="divider" />

      {subCategory.map(({ name, label }) => (
        <div
          key={name}
          onClick={() => onClick(label)}
          className={selected === label ? "active" : ""}
        >
          {label}
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 30px;
  height: 100%;
  box-sizing: border-box;
  padding-right: 20px;
  font-size: 14px;
  transition: color 0.4s ease-in-out;

  > div {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: 100%;
    &.active {
      border-bottom: 2px solid black;
      color: black;
    }
    &:hover {
      color: black;
      cursor: pointer;
    }
  }
  .divider {
    width: 1px;
    height: 28px;
    background: #eee;
    cursor: auto;
  }
`;

export default Category;
