import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const MySwitch = withStyles({
  switchBase: {
    color: '#ffba65',
    '&$checked': {
      color: '#ffa365;',
    },
    '&$checked + $track': {
      backgroundColor: '#ffa365;',
    },
  },
  checked: {},
  track: {},
})(Switch);

export default MySwitch;
