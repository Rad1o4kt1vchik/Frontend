function FragmentLayout () {
    return (
        <>
            <header>
                <h1>Fragment Layout</h1>
            </header>

            <main>
                <p>
                    Этот Layout использует только фрагменты для группировки трех siblings. И DevTools не будет дополнительного wrapper div
                </p>
            </main>

            <footer>
                <p>&copy; 2026 Lab React 02
                </p>
            </footer>
        </>    
    )
}

export default FragmentLayout;