import { playMode } from 'common/js/config'

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
  searchHistory: []
}

export default state