import configReducer from './reducers'
import * as types from './actions'
import expect from 'expect'

describe('config reducer', () => {
  it('should return the initial state', () => {
    expect(configReducer(undefined, {})).toEqual({
      config: [],
      loading: false,
      error: null
    })
  })

  it('should handle FETCH_CONFIG_SUCCESS', () => {
    expect(configReducer([], {
      type: types.FETCH_CONFIG_SUCCESS,
      payload: {
        config: ['Run the tests']
      }
    })).toEqual({
      config: ['Run the tests'],
      loading: false,
      error: null
    })

    expect(configReducer({
      config: ['Run the tests'],
      loading: false,
      error: null
    }, {
      type: types.FETCH_CONFIG_SUCCESS,
      payload: {
        config: ['Run the tests']
      }
    })).toEqual({
      config: ['Run the tests'],
      loading: false,
      error: null
    })
  })

  it('should handle FETCH_CONFIG_BEGIN', () => {
    expect(configReducer([], {
      type: types.FETCH_CONFIG_BEGIN
    })).toEqual({
      loading: true,
      error: null
    })

    expect(configReducer({
      config: ['Run the tests'],
      loading: false,
      error: null
    }, {
      type: types.FETCH_CONFIG_BEGIN
    })).toEqual({
      config: ['Run the tests'],
      loading: true,
      error: null
    })
  })

  it('should handle FETCH_CONFIG_FAILURE', () => {
    expect(configReducer([], {
      type: types.FETCH_CONFIG_FAILURE,
      payload: {
        error: '404'
      }
    })).toEqual({
      loading: false,
      error: '404',
      config: []
    })

    expect(configReducer({
      config: ['Run the tests'],
      loading: false,
      error: null
    }, {
      type: types.FETCH_CONFIG_FAILURE,
      payload: {
        error: '500'
      }
    })).toEqual({
      config: [],
      loading: false,
      error: '500'
    })
  })
})