/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Gift from 'assets/feature/gift.svg';
import Award from 'assets/feature/award.svg';

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: 'Marketplace',
    title: 'Industry Benchmarking',
    text:
      'Our Industry Benchmark data helps you understand your market, so you can make informed decisions based on how your key performance metrics compare to similar companies.',
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: 'Gift',
    title: 'Grow with confidence',
    text:
      'Budgeting with spreadsheets is time-consuming — even if you\'re an Excel Pro. But we sync with your accounting software, to create forecasts and smart budgets in half the time.',
  },
  {
    id: 3,
    imgSrc: Award,
    altText: 'Awards',
    title: 'Share a fundable plan',
    text:
      'Add a team member so they can leave comments or work on specific sections of the business plan. Share your business plan or pitch online with a link that you control access to.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Create a beautiful business plan"
          description="
          We make it easy by breaking the process into simple allowing you to 
          collaborate and build the best strategy for your business while
          allowing you to gain the insights that will help you succeed.
          "
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
