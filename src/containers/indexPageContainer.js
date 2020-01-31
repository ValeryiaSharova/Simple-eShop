import { connect } from 'react-redux';
import Page from '../pages/indexPage';
import * as actions from '../redux/actions/goodsAction';

const mapStateToProps = state => ({
  goods: state.goods.goodsData,
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps, actions)(Page);
