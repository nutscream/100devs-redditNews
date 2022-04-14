//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const subredditName = document.querySelector('#subreddit').value.toLowerCase()
  const numOfPosts = String(document.querySelector('#number').value)
  const url = `https://www.reddit.com/r/${subredditName}/hot.json?limit=${numOfPosts}`

  let parentDiv = document.createElement("div")
  parentDiv.id="news"

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        for(let i = 1; i < data.data.children.length; i++){
          let div = document.createElement("div")
          let h2 = document.createElement("h2")
          let thumb = document.createElement("img")
          let link = document.createElement("a")
          thumb.src = data.data.children[i].data.thumbnail;
          h2.innerText = data.data.children[i].data.title;
          link.href = "https://www.reddit.com" + data.data.children[i].data.permalink;
          link.innerText = "link"
          div.appendChild(h2)
          div.appendChild(thumb)
          div.appendChild(link)
          parentDiv.appendChild(div)
        }
        document.querySelector("#content").appendChild(parentDiv)
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

