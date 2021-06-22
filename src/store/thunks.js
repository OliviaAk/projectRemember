import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiServer } from '../services/api';

export const loginAdmin = createAsyncThunk('auth/login', async (userCredentials) => {
  const { data } = await apiServer.post(`admin/`, userCredentials);
  return data;
});

export const getCards = createAsyncThunk(`cards`, async () => {
  const { data } = await apiServer.get(`cards/info`);
  return data;
});
export const getHeroes = createAsyncThunk(`heroes`, async () => {
  const { data } = await apiServer.get(`dashboard`);
  return data;
});
export const getPublishHeroes = createAsyncThunk(`published heroes`, async () => {
  const { data } = await apiServer.get(`dashboard/published`);
  return data;
});
export const getHero = createAsyncThunk('selected hero', async (heroId) => {
  const { data } = await apiServer.get(`dashboard/${heroId}`);
  return data;
});
export const getCard = createAsyncThunk('selected card', async (cardId) => {
  const { data } = await apiServer.get(`cards/info/${cardId}`);
  return data;
});
export const getPublishCards = createAsyncThunk(`cards publish`, async () => {
  const { data } = await apiServer.get(`cards/publish`);
  return data;
});

export const createCard = createAsyncThunk(`create card`, async (card) => {
  const { data } = await apiServer.post(`cards/info`, card);
  return data;
});
export const createHero = createAsyncThunk(`create hero`, async (hero) => {
  const { data } = await apiServer.post(`dashboard/info`, hero);
  return data;
});

export const getUser = createAsyncThunk('user', async () => {
  const { data } = await apiServer.get(`user/`);
  return data;
});

export const getUsers = createAsyncThunk('users all', async () => {
  const { data } = await apiServer.get(`user/all`);
  return data;
});

export const setPublishCard = createAsyncThunk(
  'favoriteCards',
  async ({ id, isPublish }) => {
    const { data } = await apiServer.patch(`cards/${id}`, { isPublish });
    return data;
  }
);

export const editCard = createAsyncThunk(
  'edit card',
  async ({ _id, description, name, dateBirth, image, isPublish }) => {
    const { data } = await apiServer.patch(`cards/info/${_id}`, {
      description,
      name,
      dateBirth,
      image,
      isPublish,
    });
    return { data };
  }
);

export const editHero = createAsyncThunk(
  'edit hero',
  async ({ _id, url, text, name, dateBirth, image, isPublish }) => {
    const { data } = await apiServer.patch(`dashboard/info/${_id}`, {
      url,
      text,
      name,
      dateBirth,
      image,
      isPublish,
    });
    return { data };
  }
);

export const deleteHero = createAsyncThunk('deleted hero', async (_id) => {
  const { data } = await apiServer.remove(`dashboard/info/${_id}`);
  return { data };
});

export const deleteCard = createAsyncThunk('deleted card', async (_id) => {
  const { data } = await apiServer.remove(`cards/info/${_id}`);
  return { data };
});

export const setPublishHero = createAsyncThunk(
  'published hero',
  async ({ id, isPublish }) => {
    const { data } = await apiServer.patch(`dashboard/${id}`, { isPublish });
    return data;
  }
);

export const createQuiz = createAsyncThunk(`create quiz`, async (quizName) => {
  const { data } = await apiServer.post(`quiz/`, quizName);
  return data;
});

export const createQuestion = createAsyncThunk(`create question`, async (question) => {
  const { data } = await apiServer.post(`quiz/questions`, question);
  return data;
});
export const getQuiz = createAsyncThunk(`quizies`, async () => {
  const { data } = await apiServer.get(`quiz/`);
  return data;
});
export const getQuestions = createAsyncThunk(`questions`, async () => {
  const { data } = await apiServer.get(`quiz/questions`);
  return data;
});
export const getCurrentQuestions = createAsyncThunk(
  `current questions`,
  async (selectedQuiz) => {
    const { data } = await apiServer.get(`quiz/questions/${selectedQuiz}`);
    return data;
  }
);
export const deleteQuiz = createAsyncThunk('deleted quiz', async (_id) => {
  const { data } = await apiServer.remove(`quiz/${_id}`);
  return { data };
});

export const deleteQuestion = createAsyncThunk('deleted question', async (_id) => {
  const { data } = await apiServer.remove(`quiz/questions/${_id}`);
  return { data };
});
export const editQuiz = createAsyncThunk('edit quiz', async ({ _id, quizName }) => {
  const { data } = await apiServer.patch(`quiz/${_id}`, {
    quizName,
  });
  return { data };
});

export const editQuestion = createAsyncThunk(
  'edit question',
  async ({ _id, question, answers, correct }) => {
    const { data } = await apiServer.patch(`quiz/questions/${_id}`, {
      question,
      answers,
      correct,
    });
    return { data };
  }
);

export const createComment = createAsyncThunk(`create comment`, async (comment) => {
  const { data } = await apiServer.post(`comment/`, comment);
  return data;
});

export const getComments = createAsyncThunk(`comments`, async () => {
  const { data } = await apiServer.get(`comment/`);
  return data;
});

export const removeComment = createAsyncThunk(`remove comments`, async (_id) => {
  const { data } = await apiServer.remove(`comment/${_id}`);
  return data;
});

export const setPublishComment = createAsyncThunk(
  'published comment',
  async ({ id, isPublish }) => {
    const { data } = await apiServer.patch(`comment/${id}`, { isPublish });
    return data;
  }
);

export const editComment = createAsyncThunk(
  'edit comment',
  async ({ _id, link, comment, isPublish }) => {
    const { data } = await apiServer.post(`comment/info`, {
      link,
      comment,
      isPublish,
      _id
    });
    return {data} ;
  }
);