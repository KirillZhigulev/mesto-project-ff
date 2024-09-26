const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-23",
  headers: {
    authorization: "05eed2f4-4b15-49d3-9dca-cb2951971038",
    "Content-type": "application/json",
  },
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getUserRequest = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers,
  }).then(checkResponse);
};

export const loadCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers,
  }).then(checkResponse);
};

export const newAvatarApi = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    }),
  }).then(checkResponse);
};

export const editProfileApi = (nameInput, jobInput) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: nameInput,
      about: jobInput,
    }),
  }).then(checkResponse);
};

export const addNewCardApi = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse);
};

export const putLikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
    body: JSON.stringify({
      _id: cardId,
    }),
  }).then(checkResponse);
};

export const deleteLikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
    body: JSON.stringify({
      _id: cardId,
    }),
  }).then(checkResponse);
};

export const deleteDataCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
    body: JSON.stringify({
      _id: cardId,
    }),
  }).then(checkResponse);
};
