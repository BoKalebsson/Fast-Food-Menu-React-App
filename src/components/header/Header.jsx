function Header({ theme, onToggleTheme }) {
  return (
    <header className="py-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Theme toggle button */}
        <button
          className="btn btn-sm d-flex align-items-center gap-2"
          onClick={onToggleTheme}
        >
          {theme === "light" ? (
            <>
              <span role="img" aria-label="moon">
                🌙
              </span>
              <span>Enable Dark Mode</span>
            </>
          ) : (
            <>
              <span role="img" aria-label="sun">
                ☀️
              </span>
              <span>Enable Light Mode</span>
            </>
          )}
        </button>

        {/* Title */}
        <h1 className="h4 mb-0 flex-grow-1 text-center position-absolute start-50 translate-middle-x">
          Fast Food Menu
        </h1>
      </div>
    </header>
  );
}

export default Header;
