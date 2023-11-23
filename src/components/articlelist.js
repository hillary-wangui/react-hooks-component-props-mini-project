// this component is a child of the app component
import Article from "./article"


function ArticleList({posts}) {
    const DisplayPosts = posts.map((items) => {
        return (
            <Article 
            key={items.id}
            title={items.title}
            date={items.date}
            preview={items.preview}
            />
        )
    })
    return(
      <main>
        {/* remember about giving them the keys */}
        {DisplayPosts}
      </main>
    )
}

export default ArticleList