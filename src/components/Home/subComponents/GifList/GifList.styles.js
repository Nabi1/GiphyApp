import styled from 'styled-components';
import CardMui from '@material-ui/core/Card';
import IconButtonMui from '@material-ui/core/IconButton';

const GifList = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 50em;
`;

const Welcome = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Card = styled(CardMui)`
  margin: 1em;
  padding: 0.5em;
`;

const IconButton = styled(IconButtonMui)`
  && .MuiSvgIcon-root {
    color: pink;
  }
`;

const Styles = {
  GifList,
  Card,
  IconButton,
  Welcome,
};

export default Styles;
