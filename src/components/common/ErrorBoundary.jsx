import React from 'react';

/**
 * Basic React Error Boundary
 * Catches JavaScript errors anywhere in the child component tree,
 * logs the error, and displays an accessible fallback UI.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // In production, errors can be reported to a monitoring service here
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-savelix-lilac p-6">
          <div className="max-w-md w-full bg-white border border-savelix-border rounded-2xl p-8 shadow-sm text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-savelix-lavender flex items-center justify-center text-savelix-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-savelix-plum mb-2">
              Something went wrong
            </h1>
            <p className="text-sm text-savelix-grey mb-6">
              An unexpected error occurred while rendering this component.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                onClick={this.handleReset}
                className="px-4 py-2 text-sm font-medium text-savelix-plum bg-savelix-lavender hover:bg-savelix-lavender-light rounded-lg transition-colors"
              >
                Try Again
              </button>
              <button
                type="button"
                onClick={this.handleReload}
                className="px-4 py-2 text-sm font-medium text-white bg-savelix-plum hover:bg-savelix-plum-hover rounded-lg transition-colors"
              >
                Reload Page
              </button>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left border-t border-savelix-border pt-4">
                <summary className="text-xs text-savelix-grey cursor-pointer hover:text-savelix-plum">
                  Error Details (Dev Only)
                </summary>
                <pre className="mt-2 text-xs bg-savelix-lilac p-3 rounded overflow-auto max-h-40 text-red-600 font-mono">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
