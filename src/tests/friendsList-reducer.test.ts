import cammyFriend from '../assets/images/webp/Cammy.webp'
import kratosFriend from '../assets/images/webp/Kratos.webp'
import groguFriend from '../assets/images/webp/Grogu.webp'
import trissFriend from '../assets/images/webp/Triss.webp'
import itachiFriend from '../assets/images/webp/Itachi.webp'
import nineS from '../assets/images/webp/9s.webp'
import {FriendsListDataType, friendsListReducer} from '../redux/reducers/friendsList-reducer'


test('friendList reducer should return Data', () => {

    let state: Array<FriendsListDataType> = [
        {
            id: 1,
            src: cammyFriend,
            name: 'Cammy',
            alt: 'Cammy Avatar'
        },
        {
            id: 2,
            src: kratosFriend,
            name: 'Kratos',
            alt: 'Kratos Avatar'
        },
        {
            id: 3,
            src: groguFriend,
            name: 'Grogu',
            alt: 'Grogu Avatar'
        },
        {
            id: 4,
            src: trissFriend,
            name: 'Triss',
            alt: 'Triss Avatar'
        },
        {
            id: 5,
            src: itachiFriend,
            name: 'itachi',
            alt: 'itachi Avatar'
        },
        {
            id: 6,
            src: nineS,
            name: '9S',
            alt: '9S Avatar'
        }
    ]

    const newState = friendsListReducer(state)

    expect(newState.length).toBe(6)
})