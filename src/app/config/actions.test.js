import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions to load config.json', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_CONFIG_SUCCESS when fetching config has been done', () => {
    fetchMock.getOnce('/config.json',
      ['do something']
    )

    const expectedActions = [
      { type: actions.FETCH_CONFIG_BEGIN },
      { type: actions.FETCH_CONFIG_SUCCESS, payload: { config: ['do something'] } }
    ]

    const store = mockStore({ config: [] })

    store.dispatch(actions.fetchConfig()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates FETCH_CONFIG_FAILURE when fetching config Fails', () => {
    fetchMock.getOnce('/config.json', 500)

    const store = mockStore({ config: [] })

    store.dispatch(actions.fetchConfig()).then(() => {
      expect(findAction(store, actions.FETCH_CONFIG_BEGIN)).toEqual({type: actions.FETCH_CONFIG_BEGIN});
      expect(findAction(store, actions.FETCH_CONFIG_FAILURE).type).toMatch(actions.FETCH_CONFIG_FAILURE);
    }).catch((error) => {
       console.log('error during the eval', error)
    })
  })

  function findAction(store, type) {
    return store.getActions().find(action => action.type === type);
  }
})
