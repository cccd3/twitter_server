import * as tweetRepository from '../data/tweet.js'

// username이 없으면 모든 트윗, 있으면 username에 해당하는 트윗만
export async function getTweets(req, res, next) {
    const username = req.query.username
    const data = await (username ? tweetRepository.getAllByUsername(username) : tweetRepository.getAll())
    res.status(200).json(data)
}

// 글번호에 대한 하나의 트윗을 가져오는 함수
export async function getTweetsById(req, res, next) {
    const id = req.params.id
    const tweet = await tweetRepository.getByID(id)
    if(tweet){
        res.status(200).json(tweet)
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
}

// 트윗을 생성하는 함수
export async function createTweets(req, res, next) {
    const { username, name, text } = req.body
    const tweet = await tweetRepository.create(username, name, text)
    res.status(201).json(tweet)
}

// 트윗 수정하기
export async function updateTweets(req, res, next) {
    const id = req.params.id
    const text = req.body.text
    const tweet = await tweetRepository.update(id, text)
    if(tweet){
        res.status(201).json(tweet)
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
}

// 트윗 삭제하기
export async function deleteTweet(req, res, next) {
    const id = req.params.id
    await tweetRepository.remove(id)
    res.sendStatus(204)
}