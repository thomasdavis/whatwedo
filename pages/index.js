import styled from "styled-components";
import map from "lodash/map";
const PageContainer = styled.div`
  background: #fff;
  padding: 70px 0 0 0;
  height: 100vh;
  font-family: "Roboto", sans-serif;
`;

const TopBar = styled.div`
  position: fixed;
  height: 50px;
  width: 100vw;
  top: 0;
  left: 0;
  line-height: 50px;
  background: #d93025;
  color: #fff;
  padding: 0 20px;
`;
const SignupForm = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const Input = styled.input`
  padding: 10px 25px;
  flex: 1 1;
  margin: 0 20px;
  color: #444;
  outline: 0;
  border: 1px solid #333;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  outline: 0;
  border: 1px solid #222;
  background: #000;
  color: #ebebeb;
  margin: 0 20px;
  padding: 10px 25px;
`;

const SubTitle = styled.div`
  margin-top: 30px;
  color: #000;
  font-size: 24px;
`;

const PageContent = styled.div`
  padding: 20px;
`;
const Listing = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const ListingUrl = styled.div`
  flex: 1 1;
  font-weight: 400;
  padding: 15px;
  border-bottom: 1px dashed #555;
  &:hover {
    background: yellow;
  }
`;

const ListingBody = styled.div`
  padding: 40px;
  background: grey;
`;
function Home() {
  return (
    <PageContainer>
      <TopBar>What Would You Do With — Get quick feedback and ideas for your project!</TopBar>
      <PageContent>
        <SignupForm>
          <Input value="URL of your project" />
          <Input value="Comment (optional)" />
          <Input value="Email (private and used to notify you of feedback)" />
          <SubmitButton>Submit</SubmitButton>
        </SignupForm>
        <SubTitle>Listings</SubTitle>
        <Listing>
          <ListingUrl>jsonresume.org</ListingUrl>
          <ListingBody>
            <br />
            <textarea>asdasd</textarea>
            <br />
            <Input value="Email" />
            <br />
            <strong>Feedback</strong>
            <p>Hi, you suck everything sucks</p>
            <p>Hi, you suck everything sucks</p>
            <p>Hi, you suck everything sucks</p>
            <p>Hi, you suck everything sucks</p>
          </ListingBody>
        </Listing>
        <Listing>
          <ListingUrl>dronsusckS.org</ListingUrl>
        </Listing>
      </PageContent>
    </PageContainer>
  );
}

export default Home;
