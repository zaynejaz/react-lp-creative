/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';

import Client from 'assets/images/client-thumb.png';

export default function ClientFeedback() {
  return (
    <section sx={{ variant: 'section.feedback' }} id="feedback">
      <Container>
        <SectionHeader
          title="Over 1 million small to medium sized business customers"
          description="It's proven, companies that plan and track against their plan grow 30% faster than those that don't. Our customers are living proof. No matter your industry location, we can help you get your business off the ground fast."
        />

        <Box sx={styles.thumbWrapper}>
          <Image
            src={Client}
            alt="Clients Thumbnail"
            width="891"
            height="297"
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
    px: 4,
    pb: [0, null, null, null, null, null, null, null, 6],
    img: {
      height: [100, 'auto'],
    },
  },
};
