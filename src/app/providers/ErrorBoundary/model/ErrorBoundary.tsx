import React, { ReactNode } from 'react';
import { FallBackPage } from '../../../../pages/FallBackPage';

interface Props {
  children?: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <FallBackPage /> : children;
  }
}

export default ErrorBoundary;
