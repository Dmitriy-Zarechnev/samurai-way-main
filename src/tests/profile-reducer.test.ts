import {addPost, ProfilePagePropsType, profileReducer, setUserProfile} from '../redux/profile-reducer'
import img1 from '../assets/images/Cupcake.jpg'


test('profile reducer should increase the postsData length by one', () => {

    const state: ProfilePagePropsType = {
        profileInfo: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: null,
                vk: '',
                twitter: '',
                instagram: '',
                youtube: null,
                github: '',
                mainLink: null
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: null,
            photos: {
                small: '',
                large: ''
            }
        },
        postsData: [
            {
                id: 1,
                header: 'Begin',
                src: img1,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis cupiditate debitis dignissimos earum eius error ex iusto maxime minima nihil nostrum numquam odio possimus quae quidem quos, rerum saepe sint soluta tempore tenetur veniam voluptates! Enim inventore sequi totam. Corporis ea ipsum iure officiis quo, ut velit?',
                likesCount: 25
            },
            {id: 2, header: 'Process', src: img1, message: 'It is my second post', likesCount: 40},
            {id: 3, header: 'End', src: img1, message: 'It is my third post', likesCount: 52}
        ],
        status: ''
    }

    const newHeader = 'Header'
    const newPost = 'Post'
    const newState = profileReducer(state, addPost(newHeader, newPost))

    expect(newState.postsData.length).toBe(state.postsData.length + 1)
    expect(newState.postsData[0].header).toBe('Header')
    expect(newState.postsData[0].message).toBe('Post')
    expect(newState.profileInfo).toBe(state.profileInfo)
})


test('profile reducer should update profileInfo', () => {

    const state: ProfilePagePropsType = {
        profileInfo: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: null,
                vk: '',
                twitter: '',
                instagram: '',
                youtube: null,
                github: '',
                mainLink: null
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: null,
            photos: {
                small: '',
                large: ''
            }
        },
        postsData: [
            {
                id: 1,
                header: 'Begin',
                src: img1,
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis cupiditate debitis dignissimos earum eius error ex iusto maxime minima nihil nostrum numquam odio possimus quae quidem quos, rerum saepe sint soluta tempore tenetur veniam voluptates! Enim inventore sequi totam. Corporis ea ipsum iure officiis quo, ut velit?',
                likesCount: 25
            },
            {id: 2, header: 'Process', src: img1, message: 'It is my second post', likesCount: 40},
            {id: 3, header: 'End', src: img1, message: 'It is my third post', likesCount: 52}
        ],
        status: ''
    }

    const info = {
        aboutMe: 'i am not alcoholic',
        contacts: {
            facebook: '',
            website: null,
            vk: 'http://hello',
            twitter: '',
            instagram: '',
            youtube: null,
            github: '',
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: 'Hulk',
        userId: null,
        photos: {
            small: '',
            large: ''
        }
    }

    const newState = profileReducer(state, setUserProfile(info))

    expect(newState.profileInfo.aboutMe).toBe('i am not alcoholic')
    expect(newState.profileInfo.fullName).toBe('Hulk')
    expect(newState.profileInfo.contacts.vk).toBe('http://hello')

    expect(newState.postsData.length).toBe(state.postsData.length)
})
