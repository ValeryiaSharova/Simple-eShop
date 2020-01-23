import { connect } from 'react-redux';
import IndexForUser from '../pages/User/IndexForUser';

const mapStateToProps = state => ({
  goods: state.goods.goodsData,
});

export default connect(mapStateToProps)(IndexForUser);
