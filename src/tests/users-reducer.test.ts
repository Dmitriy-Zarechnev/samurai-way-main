import {followFriend, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingInProgress, toggleIsFetching, unfollowFriend, UsersInitialState, usersReducer} from '../redux/reducers/users-reducer'


test('users reducer should change followed false into true', () => {

    const state: UsersInitialState = {
        items: [
            {
                id: 1,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 3,
                name: 'bob',
                followed: false,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 6,
                name: 'bob',
                followed: false,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            }
        ],
        totalCount: 0,
        error: '',
        pageSize: 7,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }

    const userID = 3

    const newState = usersReducer(state, followFriend(userID))

    expect(newState.items[1].followed).toBe(true)
    expect(newState.items[2].followed).toBe(false)
    expect(newState.isFetching).toBe(true)
    expect(newState.pageSize).toBe(7)
    expect(newState.totalCount).toBe(0)
})


test('users reducer should change followed true into false', () => {

    const state: UsersInitialState = {
        items: [
            {
                id: 1,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 3,
                name: 'bob',
                followed: false,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 6,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            }
        ],
        totalCount: 0,
        error: '',
        pageSize: 7,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }

    const userID = 6

    const newState = usersReducer(state, unfollowFriend(userID))

    expect(newState.items[2].followed).toBe(false)
    expect(newState.items[0].followed).toBe(true)
    expect(newState.isFetching).toBe(true)
    expect(newState.pageSize).toBe(7)
    expect(newState.totalCount).toBe(0)
})


test('users reducer should increase items length', () => {

    const state: UsersInitialState = {
        items: [
            {
                id: 1,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 3,
                name: 'bob',
                followed: false,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 6,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            }
        ],
        totalCount: 0,
        error: '',
        pageSize: 7,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }

    const newUsers = [
        {
            id: 9,
            name: 'sam',
            followed: true,
            photos: {
                small: '',
                large: ''
            },
            status: 'dead'
        },
        {
            id: 5,
            name: 'nil',
            followed: false,
            photos: {
                small: '',
                large: ''
            },
            status: 'goal'
        }
    ]

    const newState = usersReducer(state, setUsers(newUsers))


    expect(newState.items.length).not.toBe(state.items.length)
    expect(newState.items.length).toBe(2)
    expect(newState.items[0].name).toBe('sam')
    expect(newState.items[1].status).toBe('goal')

    expect(newState.isFetching).toBe(true)
    expect(newState.pageSize).toBe(7)
    expect(newState.totalCount).toBe(0)
})


test('users reducer should change current page', () => {

    const state: UsersInitialState = {
        items: [
            {
                id: 1,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 3,
                name: 'bob',
                followed: false,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 6,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            }
        ],
        totalCount: 0,
        error: '',
        pageSize: 7,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }

    const currentPage = 3

    const newState = usersReducer(state, setCurrentPage(currentPage))


    expect(newState.currentPage).toBe(3)

    expect(newState.items.length).toBe(state.items.length)
    expect(newState.isFetching).toBe(true)
    expect(newState.pageSize).toBe(7)
    expect(newState.totalCount).toBe(0)
})


test('users reducer should change total users count', () => {

    const state: UsersInitialState = {
        items: [
            {
                id: 1,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 3,
                name: 'bob',
                followed: false,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 6,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            }
        ],
        totalCount: 0,
        error: '',
        pageSize: 7,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }

    const newTotalCount = 5000

    const newState = usersReducer(state, setTotalUsersCount(newTotalCount))

    expect(newState.totalCount).toBe(5000)

    expect(newState.items.length).toBe(state.items.length)
    expect(newState.isFetching).toBe(true)
    expect(newState.pageSize).toBe(7)
    expect(newState.currentPage).toBe(1)
})


test('users reducer should change isFetching into false', () => {

    const state: UsersInitialState = {
        items: [
            {
                id: 1,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 3,
                name: 'bob',
                followed: false,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 6,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            }
        ],
        totalCount: 0,
        error: '',
        pageSize: 7,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }

    const newFetching = false

    const newState = usersReducer(state, toggleIsFetching(newFetching))

    expect(newState.isFetching).toBe(false)

    expect(newState.items.length).toBe(state.items.length)
    expect(newState.totalCount).toBe(0)
    expect(newState.pageSize).toBe(7)
    expect(newState.currentPage).toBe(1)
})


test('users reducer should increase followingInProgress length by one', () => {

    const state: UsersInitialState = {
        items: [
            {
                id: 1,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 3,
                name: 'bob',
                followed: false,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 6,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            }
        ],
        totalCount: 0,
        error: '',
        pageSize: 7,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }

    const newFetching = true
    const id = 3

    const newState = usersReducer(state, toggleFollowingInProgress(newFetching, id))

    expect(newState.followingInProgress.length).toBe(1)
    expect(newState.followingInProgress[0]).toBe(3)
    expect(newState.followingInProgress.length).not.toBe(state.followingInProgress.length)
    expect(newState.isFetching).toBe(true)

    expect(newState.items.length).toBe(state.items.length)
    expect(newState.totalCount).toBe(0)
    expect(newState.pageSize).toBe(7)
    expect(newState.currentPage).toBe(1)
})


test('users reducer should reduce followingInProgress length by one', () => {

    const state: UsersInitialState = {
        items: [
            {
                id: 1,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 3,
                name: 'bob',
                followed: false,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            },
            {
                id: 6,
                name: 'bob',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                },
                status: 'life'
            }
        ],
        totalCount: 0,
        error: '',
        pageSize: 7,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [5,3,4]
    }

    const newFetching = false
    const id = 3

    const newState = usersReducer(state, toggleFollowingInProgress(newFetching, id))

    expect(newState.followingInProgress.length).toBe(2)
    expect(newState.followingInProgress[1]).toBe(4)
    expect(newState.followingInProgress.length).not.toBe(state.followingInProgress.length)


    expect(newState.items.length).toBe(state.items.length)
    expect(newState.totalCount).toBe(0)
    expect(newState.pageSize).toBe(7)
    expect(newState.currentPage).toBe(1)
})