import { Component } from 'react';

class ErrorBoundary extends Component{

  constructor(props, context) {
    super(props, context);
    this.state = { hasError: false }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>HAS ERRORS</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
