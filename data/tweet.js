
let tweets = [
    {
        id:'1',
        name:'김사과',
        username:'apple',
        text:'안녕하세요',
        createdAt: Date.now().toString(),
        url:'https://img.freepik.com/premium-photo/young-asian-man-her-clean-face-with-fresh-healthy-skin-ai-generated_145713-6656.jpg'
    },
    {
        id:'2',
        name:'반하나',
        username:'banana',
        text:'반갑습니다',
        createdAt: Date.now().toString(),
        url:'https://img.freepik.com/premium-photo/young-asian-man-her-clean-face-with-fresh-healthy-skin-ai-generated_145713-6656.jpg'
    },
    {
        id:'3',
        name:'오렌지',
        username:'orange',
        text:'첫 트윗!',
        createdAt: Date.now().toString(),
        url:'https://img.freepik.com/premium-photo/young-asian-man-her-clean-face-with-fresh-healthy-skin-ai-generated_145713-6656.jpg'
    }
]

// 모든 트윗을 리턴
export async function getAll() {
    return tweets
}

// 아이디에 대한 트윗을 리턴
export async function getAllByUsername(username) {
    return tweets.filter((tweet) => tweet.username == username)
}

// 글 번호에 대한 트윗을 리턴
export async function getByID(id) {
    return tweets.find((tweet) => tweet.id === id)
}

// 생성할 트윗을 리턴
export async function create(username, name, text) {
    const tweet = {
        id: '4',
        username: username,
        name: name,
        text: text,
        createdAt: Date.now().toString(),
    }
    tweets = [tweet, ... tweets]
    return tweet
}

// 수정할 트윗을 리턴
export async function update(id, text) {
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet){
        tweet.text = text
    }
    return tweet
}

// 트윗을 삭제하기
export async function remove(id) {
    tweets = tweets.filter((tweet) => tweet.id !== id)
}