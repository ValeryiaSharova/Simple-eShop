import { connect } from 'react-redux';
import Page from './CartPage';
import * as action from '../../redux/actions/goodsAction';

const mapStateToProps = state => ({
  cart: state.goods.cart,
});

export default connect(mapStateToProps, action)(Page);
