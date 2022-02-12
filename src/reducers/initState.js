const initState = {
  user: {
    id: 4,
    name: '',
  },
  messages: [
    {
      userId: 1,
      userName: '정민형',
      profileImage: 'https://github.com/minbr0ther.png',
      content: '안녕하세요 저는 정민형입니다.',
      date: '2022-02-10 19:19:03',
      messageId: 1,
    },
    {
      userId: 2,
      userName: '김선명',
      profileImage: 'https://github.com/BGM-109.png',
      content: '안녕하세요 저는 김선명입니다.',
      date: '2022-02-10 19:20:03',
      messageId: 2,
    },
    {
      userId: 3,
      userName: '민무길',
      profileImage: 'https://github.com/gilmujjang.png',
      content:
        '안녕하세요 주니어 프론트 엔드 개발자 민무길입니다. 취미는 테니스 입니다',
      date: '2022-02-10 19:21:03',
      messageId: 3,
    },
    {
      userId: 2,
      userName: '김선명',
      profileImage: 'https://github.com/BGM-109.png',
      content: '반가워요',
      date: '2022-02-10 19:22:03',
      messageId: 4,
    },
    {
      userId: 1,
      userName: '정민형',
      profileImage: 'https://github.com/minbr0ther.png',
      content: '저도 반가워요',
      date: '2022-02-10 19:23:03',
      messageId: 5,
    },
  ],
  text: '',
  reply: '',
};

export default initState;
