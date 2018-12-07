import { playMode } from 'common/js/config'
import { loadSearch } from 'common/js/cache'
// import { loadSearch, loadPlay, loadFavorite } from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {}, // 9-3榜单详情页
  searchHistory: loadSearch(),
  playHistory: [],
  favoriteList: []
  // playHistory: loadPlay(),
  // favoriteList: loadFavorite()
}

export default state