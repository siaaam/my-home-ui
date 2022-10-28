import Head from 'next/head';
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiBootstrap,
  SiFigma,
  SiGraphql,
  SiJavascript,
  SiMaterialui,
  SiPostman,
  SiReact,
  SiSass,
  SiStrapi,
  SiTailwindcss,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoNodejs } from 'react-icons/io';
import {
  Card,
  Description,
  SkillsCard,
  Stack,
  StyledHome,
} from '../styles/StyledHome';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledHome>
        <Description>
          <h2>
            Hi <span> 👋,</span>
          </h2>
          <h1>I am Siam</h1>

          <p>Frontend Developer | ReactJS | NextJS</p>

          <button>contact me</button>
        </Description>

        <SkillsCard>
          <Card>
            <h3>Expertise</h3>

            <Stack>
              <span style={{ color: '#fffffe' }}>Frontend : </span>
              <span style={{ color: 'yellow' }}>
                <SiJavascript />
              </span>

              <span style={{ color: '#5CCFEE' }}>
                <SiReact />
              </span>

              <span style={{ color: '#fffffe' }}>
                <TbBrandNextjs />
              </span>
            </Stack>
            <Stack>
              <span style={{ color: '#fffffe' }}>Backend : </span>
              <span style={{ color: '#4C25D9' }}>
                <SiStrapi />
              </span>
              <span style={{ color: '#509941' }}>
                <IoLogoNodejs />
              </span>
            </Stack>

            <Stack>
              <span style={{ color: '#fffffe' }}>Design :</span>
              <span style={{ color: '#007BF7' }}>
                <SiMaterialui />
              </span>
              <span style={{ color: '#15B8C5' }}>
                <SiTailwindcss />
              </span>
              <span style={{ color: '#620EEC' }}>
                <SiBootstrap />
              </span>
              <span style={{ color: '#C76494' }}>
                <SiSass />
              </span>
            </Stack>
            <Stack>
              <span style={{ color: '#fffffe' }}>UI/UX :</span>
              <span style={{ color: '#F76E5F' }}>
                <SiFigma />
              </span>
              <span style={{ color: '#F75EEE' }}>
                <SiAdobexd />
              </span>
              <span style={{ color: '#2FA3F7' }}>
                <SiAdobephotoshop />
              </span>
            </Stack>

            <Stack>
              <span style={{ color: '#fffffe' }}>Others :</span>
              <span style={{ color: '#F76935' }}>
                <SiPostman />
              </span>
              <span style={{ color: '#DA0093' }}>
                <SiGraphql />
              </span>
            </Stack>
          </Card>
        </SkillsCard>
      </StyledHome>
    </div>
  );
}
