import styled from 'styled-components';
import { Typography as TypographyMui } from '@material-ui/core';
import { Link as LinkReactRouter } from 'react-router-dom';
import ToolbarMui from '@material-ui/core/Toolbar';

const Toolbar = styled(ToolbarMui)`
  background-color: #562c34;
  a {
    text-decoration: none;
  }
  & MuiToolbar-root {
    background-color: #282c34;
  }
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
  Toolbar,
};

export default Styles;
