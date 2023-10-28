import React, { ErrorInfo, ReactNode } from 'react';
import { FallBackPage } from '../../../../pages/FallBackPage';

interface Props {
  children?: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    console.log('render');

    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <FallBackPage /> : children;
  }
}

export default ErrorBoundary;
