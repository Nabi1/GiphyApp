import styled from 'styled-components';
import { Typography as TypographyMui } from '@material-ui/core';
import { Link as LinkReactRouter } from 'react-router-dom';

const Paper = styled.div`
  /* height: 100%; */
`;

const EmptyList = styled.div`
  height: 100%;
`;

const Typography = styled(TypographyMui)`
  color: white;
  margin: 1em;
`;

const Link = styled(LinkReactRouter)`
  margin: 0.5em;
`;

const Styles = {
  Typography,
  Link,
  Paper,
  EmptyList,
};

export default Styles;
