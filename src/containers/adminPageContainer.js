import { connect } from 'react-redux';
import IndexForAdmin from '../pages/Admin/IndexForAdmin';
import * as actions from '../redux/actions/goodsAction';

const mapStateToProps = state => ({
  goods: state.goods.goodsData,
});

export default connect(mapStateToProps, actions)(IndexForAdmin);
