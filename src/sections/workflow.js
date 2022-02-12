/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

const data = [
  {
    id: 1,
    title: 'Build an effective growth strategy',
    text:
      'The key to good business planning is implementation. If your ideas stay on paper and you don\'t take action, yout business will never launch.',
  },
  {
    id: 2,
    title: 'Determine future financial needs',
    text:
      'Our built-in formulas project your cash flow automatically. It\'s a quick and easy way to create accurate forecasts and budgets.',
  },
  {
    id: 3,
    title: 'Attract investors and lenders',
    text:
      'The our template model is SBA-approved, so you can give lenders and investors the information they need to evaluate your business.',
  },
];

export default function WorkFlow() {
  return (
    <section sx={{ variant: 'section.workflow' }}>
      <Container>
        <SectionHeader
          title="The 3 main reasons for any business plan"
          description="Your business plan is the tool you will use to persuade others that working with you (or investing in your business) is a smart decision. It will even show you where your pitfalls are and how to mitigate or even eliminate them."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={{ variant: 'text.heading' }}>{item.title}</Heading>
                <Text sx={styles.wrapper.description}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 3],
    pb: [0, null, null, null, null, null, null, null, 5],
    mb: -1,
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
  card: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, 'left'],
    px: [0, 5, 0],
  },

  iconBox: {
    flexShrink: 0,
    mb: [4, null, null, 0],
    fontSize: [8, 9, null, null, 10, null, null, 11],
    fontWeight: 300,
    fontFamily: 'special',
    color: 'heading',
    lineHeight: 1,
    letterSpacing: 'heading',
    mr: ['auto', null, 0, 4, null, null, null, 5],
    ml: ['auto', null, 0],
    mt: [0, null, null, -1],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    description: {
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: 1.9,
      pt: 2,
    },
  },
};
