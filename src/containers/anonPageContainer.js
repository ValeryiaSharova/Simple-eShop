import { connect } from 'react-redux';
import IndexForAnon from '../pages/Anonymous/IndexForAnon';

const mapStateToProps = state => ({
  goods: state.goods.goodsData,
});

export default connect(mapStateToProps)(IndexForAnon);
