import { NextPage } from 'next';
// import { Paragraph } from '@/components/Typography/Paragraph';
import { Title } from '@/components/Typography/Title';

const Home: NextPage = (): JSX.Element => {
  return (
    <main>
      <h1>Main page</h1>
      <Title tag="h3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, fugiat.
      </Title>
      {/* <Paragraph isUppercase>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, hic?
      </Paragraph> */}
    </main>
  );
};

export default Home;
