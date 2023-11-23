// This is a child component of article list

// This means that we will be exporting it out to our article list component

// any changes will be done on our articlle list component

function Article({title, 
    date="January 1, 1970", 
    preview}) {
    return(
     <>
     <article>
        {/* This will have a prop for title */}
        <h3>{title}</h3>
        {/* This will have a prop of date && also a default of "January 1, 1970" if no date is written */}
        <small>{date}</small>
        {/* this will have the preview text */}
        <p>{preview}</p>
     </article>
     </>
    )
}

export default Article