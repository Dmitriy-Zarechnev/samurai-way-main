import axios from 'axios'

// ---------- Instance - хранит объект с настройками запроса ----------------
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd9bbcdc0-0dbd-4e98-ab2c-6652c2ba0fb0'
    }
})

// -------------- Получение списка users -------------------
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

// -------------- Follow and Unfollow -------------------
export const followUnfollowAPI = {
    followUser(id: number) {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

// -------------- profileAPI -------------------
export const profileAPI = {
    userProfile(userId: number) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}

// -------------- Auth -------------------
export const authAPI = {
    authHeader() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}