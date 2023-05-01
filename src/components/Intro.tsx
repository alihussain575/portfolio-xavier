import Image from 'next/image';
import SanityText from './SanityText';
import { BsFillFilePdfFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import ButtonLink from './ButtonLink';
import FlexSection from './FlexSection';
import FlexSectionImage from './FlexSectionImage';
import FlexSectionText from './FlexSectionText';
import SocialLink from './SocialLink';
import { getIntro } from '../lib/fetchers';
import ParticleCanvas from './Canvas';

const Intro = async () => {
  const { largeText, smallText } = await getIntro();

  return (
    <FlexSection>
      <FlexSectionText className="relative z-40">
        <h2 className="h2 mb-0">Hello!</h2>
        <h1 className="-ml-1 mt-1 font-bold text-6xl">I am Xavier Johnson</h1>
        <SanityText className="mt-8 text-xl" content={largeText} />
        <SanityText className="mt-3" content={smallText} />
        <div className="flex space-x-6 mt-6 text-sm">
          <SocialLink
            href="https://github.com/K0D0D"
            title="GitHub"
            Icon={<BsGithub />}
          />
          <SocialLink
            href="https://linkedin.com/in/daniil-kovach-k0d0d"
            title="LinkedIn"
            Icon={<BsLinkedin />}
          />
          <SocialLink
            href="https://drive.google.com/file/d/1ofasGYjbqz2VZpdXdyxBp-BGPOiBjShH/view"
            title="Resume"
            Icon={<BsFillFilePdfFill />}
          />
        </div>
      </FlexSectionText>
      <FlexSectionImage className="flex-1 md:pb-[35%] z-40 ">
        <Image src="/intro.svg" priority fill alt="intro" />
      </FlexSectionImage>
    </FlexSection>
  );
};

export default Intro as unknown as () => JSX.Element; //ts server component workaround
