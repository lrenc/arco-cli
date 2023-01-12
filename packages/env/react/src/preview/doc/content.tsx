// eslint-disable-next-line import/no-extraneous-dependencies
import React, { ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface DocsContentProps {
  doc?: ComponentType;
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export function Content({ doc }: DocsContentProps) {
  const Content: any = typeof doc === 'function' ? doc : () => null;
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Content />
    </ErrorBoundary>
  );
}