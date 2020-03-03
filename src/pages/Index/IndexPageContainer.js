import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from './IndexPage';
import * as actionsGood from '../../redux/actions/goodsAction';
import * as actionsUser from '../../redux/actions/userAction';

const mapStateToProps = state => ({
  goods: state.goods.visibleGoods,
  currentUser: state.users.currentUser,
  users: state.users.usersData,
  loadedGoods: state.goods.loadedData,
  loadingGoods: state.goods.loading,
  errorGoods: state.goods.error,
  loadedUsers: state.users.loadedData,
  loadingUsers: state.users.loading,
  errorUsers: state.users.error,
});

const mapDispatchToProps = dispatch => {
  const {
    deleteGood,
    addGood,
    editGood,
    loadGoods,
    addToCart,
    search,
    setRating,
    deleteRating,
    getEvaluatedGoods,
  } = bindActionCreators(actionsGood, dispatch);
  const { loadUsers } = bindActionCreators(actionsUser, dispatch);

  return {
    deleteGood,
    addGood,
    editGood,
    loadGoods,
    loadUsers,
    addToCart,
    search,
    setRating,
    deleteRating,
    getEvaluatedGoods,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
