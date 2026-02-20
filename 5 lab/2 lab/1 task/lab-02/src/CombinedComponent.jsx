function CombinedComponents () {
    const items = [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Banana'},
        {id: 3, name: 'Cherry'},
        {id: 4, name: 'Date'}
    ];
    return ( 
        <>
        <h2>Список продуктов</h2>
        <ul>
            {items.map((item) => (
                <li key = {item.id}>{item.name}</li>
            ))}
        </ul>
        <p>Total: {items.length}</p>
        </>
    );
}

export default CombinedComponents;