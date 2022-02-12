/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import KnowledgeThumb from 'assets/images/knowledge-thumb.png';

const data = {
  title: '100% Secure, With Bank-Level Security',
  description:
    'We understand how important your personal information is to you and we are committed to keeping it strictly confidential. Your privacy is not for sale. We will never sell, rent, or otherwise abuse the private information you have trusted us with.',
  btnName: 'Read Our Privacy Policy',
  btnURL: '#',
};

export default function Knowledge() {
  return (
    <section sx={{ variant: 'section.knowledge' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image
            src={KnowledgeThumb}
            alt="Thumbnail"
            width="632"
            height="750"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['flex-Start', null, null, 'space-between'],
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    pl: [0, null, null, 4, 7, 8, 9],
    pr: [0, null, null, null, 2, 9, 6],
    display: 'flex',
    mx: ['auto', null, null, 0],
    img: {
      height: [400, 'auto'],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 365, 420, 430, '490px'],
    pb: [7, null, null, 0],
    '.description': {
      pr: [0, null, 7, 5],
    },
    '.btn__link': {
      mt: [5, null, null, 6],
    },
  },
};
