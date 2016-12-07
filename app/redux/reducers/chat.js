import * as types from '../../common/ActionTypes';

const initialState = {
    isRefreshing: false,
    loading: false,
    isLoadMore: false,
    noMore: false,
    articleList: {}
};

export default function chat(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_ARTICLE_LIST:
            return Object.assign({}, state, {
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                isLoadMore: action.isLoadMore
            });
        case types.RECEIVE_ARTICLE_LIST:
            return Object.assign({}, state, {
                isRefreshing: false,
                isLoadMore: false,
                noMore: action.articleList.length === 0,
                articleList: state.isLoadMore ? loadMore(state, action) : combine(state, action),
                loading: state.articleList[action.typeId] === undefined
            });
        default:
            return state;
    }
}

function combine(state, action) {
    state.articleList[action.typeId] = action.articleList;
    return state.articleList;
}

function loadMore(state, action) {
    state.articleList[action.typeId] = state.articleList[action.typeId].concat(action.articleList);
    return state.articleList;
}
