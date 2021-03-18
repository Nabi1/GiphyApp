import styled from 'styled-components';
import { Typography as TypographyMui } from '@material-ui/core';

const Typography = styled(TypographyMui)`
  margin-top: 1em;
  color: #562c34;
`;

const EmptyList = styled.div`
  height: 100%;
`;

const Styles = {
  EmptyList,
  Typography,
};

export default Styles;
