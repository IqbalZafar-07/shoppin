import React from "react";

function withErrorBoundary(WrappedComponent, fallback) {
  return class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        error: null,
      };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, info) {
      console.error("ErrorBoundary caught an error:", error, info);
    }

    handleReload = () => {
      window.location.reload();
    };

    render() {
      if (this.state.hasError) {
        return (
          fallback || (
            <div style={styles.container}>
              <h2>Something went wrong.</h2>
              <button onClick={this.handleReload} style={styles.button}>
                Reload Page
              </button>
            </div>
          )
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}

const styles = {
  container: {
    textAlign: "center",
    color: "#B00020",
    fontFamily: "sans-serif",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#1caf6b",
    border: "none",
    borderRadius: "4px",
    color: "white",
  },
};

export default withErrorBoundary;
