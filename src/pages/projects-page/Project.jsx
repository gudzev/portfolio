export function Project({name, description, stack, url, image})
{
    return (
        <div className="project">
            <div className="project-img-container">
                <img src={image} alt="MoviesDB Image" className="project-img"/>
            </div>
            <div className="project-name-container">
                <h2>{name}</h2>
            </div>
            <div className="project-description-container">
                <p>{description}</p>
            </div>
            <div className="project-stack-container">
                {
                    stack.map((stackItem) =>
                    {
                        return (
                            <span className="stack" key={crypto.randomUUID()}>
                                {stackItem}
                            </span>
                        )
                    })
                }
            </div>
            <div className="project-footer">
                <a href={url} target="_blank">Visit</a>
            </div>
        </div>
    )
}