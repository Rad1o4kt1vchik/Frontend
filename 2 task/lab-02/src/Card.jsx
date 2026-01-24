function Card ({title, children, className}) {
    const cardClass = className ? `card ${className}` : 'card';

    return (
        <article className={cardClass}>
            <h3>{title}</h3>
            <div className="card-body">
                {children}
            </div>
        </article>
    );
}

export default Card;