import styled from 'styled-components';
import TextFieldMui from '@material-ui/core/TextField';

const SearchArea = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 1em;
  margin-bottom: 2em;
  padding-top: 1em;
  width: 50%;
`;

const TextField = styled(TextFieldMui)`
  margin: 1em;
  width: 100%;
`;

const Styles = {
  TextField,
  SearchArea,
};

export default Styles;
