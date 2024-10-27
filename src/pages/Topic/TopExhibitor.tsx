import styled from "@emotion/styled";

interface Props {
  contributors?: {
    name: string;
    username: string;
    profile_image: {
      medium: string;
    };
  }[];
}
const TopExhibitor = ({ contributors }: Props) => {
  return (
    <Container>
      <BaseBoxTitle>Top Contributors</BaseBoxTitle>
      {contributors?.slice(0, 4).map((contributor) => (
        <Contributor key={contributor.name}>
          <img src={contributor.profile_image?.medium} alt={contributor.name} />
          <div>
            <span>{contributor.name}</span>
            <span>{contributor.username}</span>
          </div>
        </Contributor>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 306px;
  height: 100%;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-sizing: border-box;
`;

const BaseBoxTitle = styled.div`
  padding-block: 4px;
  font-size: 1rem;
  font-weight: bold;
`;

const Contributor = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  margin-block: 2px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #eee;
    border-radius: 12px;
  }
  img {
    width: 40px;
    border-radius: 50px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;

    span:first-of-type {
      font-size: 16px;
      font-weight: 600;
    }

    span:last-of-type {
      font-size: 14px;
      color: #767676;
    }
  }
`;

export default TopExhibitor;
