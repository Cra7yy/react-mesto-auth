class Appi {
  constructor({
    baseUrl,
    headers
  }) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(res.status)
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    }).then((res) => {
      return this._getResponseData(res)
    })
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    }).then((res) => {
      return this._getResponseData(res)
    })
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.sign
      })
    }).then((res) => {
      return this._getResponseData(res)
    })
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then((res) => {
      return this._getResponseData(res)
    })
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id} `, {
        method: "DELETE",
        headers: this._headers,
      })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes  `, {
        method: "DELETE",
        headers: this._headers,
      })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes  `, {
        method: "PUT",
        headers: this._headers,
      })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar
        })
      })
      .then((res) => {
        return this._getResponseData(res)
      })
  }
}

const Api = new Appi({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: 'f09e6dbd-f0d9-4e49-91dc-b9612ffd8da0',
    'Content-Type': 'application/json'
  }
})

export default Api
