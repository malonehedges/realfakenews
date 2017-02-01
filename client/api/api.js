const ARTICLES_URL = 'https://www.reddit.com/r/TheOnion+nottheonion/.json'

export async function getArticles (page = '') {
  let response = await fetch(`${ARTICLES_URL}?after=${page}`)
  let json = await response.json()

  let {
    data: {
      children: articles,
      after,
      before,
    }
  } = json

  articles = articles.map((article) => {
    return {
      title: article.data.title,
      url: article.data.url,
      thumbnail: article.data.thumbnail,
      created: article.data.created,
      num_comments: article.data.num_comments,
      upvotes: article.data.ups,
    }
  })

  return {
    articles,
    after,
    before,
  }
}
