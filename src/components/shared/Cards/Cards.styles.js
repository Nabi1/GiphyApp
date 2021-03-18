import styled from 'styled-components';
import CardMui from '@material-ui/core/Card';
import CardActionsMui from '@material-ui/core/CardActions';

import IconButtonMui from '@material-ui/core/IconButton';

const GifList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;
const Welcome = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Card = styled(CardMui)`
  margin: 1em;
  padding: 0.5em;
  height: fit-content;
`;
const CardActions = styled(CardActionsMui)`
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;

const IconButton = styled(IconButtonMui)`
  && .MuiSvgIcon-root {
    color: pink;
  }
`;

const Styles = {
  Card,
  CardActions,
  IconButton,
  GifList,
  Welcome,
};

export default Styles;
