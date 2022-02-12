/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';

import SupportTeam from 'assets/images/support-thumb.png';

export default function Support() {
  return (
    <section sx={{ variant: 'section.support' }} id="support">
      <Container>
        <SectionHeader
          title="Who are we"
          description="LP Creative is led by a diverse group of professionals. From MBAs to marketing experts to startup veterans, the management team works together to make LP Creative an industry leader in small business software solutions — and a great place to work."
        />

        <Box sx={styles.thumbWrapper}>
          <Image
            src={SupportTeam}
            alt="Support Team"
            width="992"
            height="531"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    img: {
      height: ['auto'],
    },
  },
};
