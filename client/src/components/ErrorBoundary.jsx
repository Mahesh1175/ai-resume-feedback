import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in Markdown rendering:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h3 className="text-red-500">Something went wrong while rendering Markdown.</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
