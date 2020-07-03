import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "8af1d37d-7e6d-48a7-b5f5-4add2fc358e1",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  followUser(userId) {
    return axiosInstance
      .post(`follow/${userId}`)
      .then((response) => response.resultCode);
  },
  unfollowUser(userId) {
    return axiosInstance
      .delete(`follow/${userId}`)
      .then((response) => response.resultCode);
  },
};

export const authAPI = {
  authMe() {
    return axiosInstance.get("auth/me").then((response) => response.data);
  },
  login(email, password, rememberMe) {
    return axiosInstance
      .post("auth/login", { email, password, rememberMe })
      .then((response) => response.data);
  },
  logout() {
    return axiosInstance.post("auth/logout").then((response) => response.data);
  },
};

export const profileAPI = {
  getProfileInfo(userId) {
    return axiosInstance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  getUserStatus(userId) {
    return axiosInstance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },

  setUserStatus(status) {
    return axiosInstance
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
};

export const dialogsAPI = {
  getDialogs() {
    return axiosInstance.get("dialogs").then((response) => response.data);
  },

  getDialogMessages(userId) {
    return axiosInstance
      .get(`dialogs/${userId}/messages`)
      .then((response) => response.data);
  },

  sendMessage(userId, messageBody) {
    return axiosInstance
      .post(`dialogs/${userId}/messages`, { body: messageBody })
      .then((response) => response.data);
  },
};
