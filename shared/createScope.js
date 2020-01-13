import type { ReactScope } from 'shared/ReactTypes';
import { REACT_SCOPE_TYPE } from 'shared/ReactSymbols';

export default function createScope(): ReactScope {
  const scopeComponent = {
    $$typeof: REACT_SCOPE_TYPE,
  };
  if (__DEV__) {
    Object.freeze(scopeComponent);
  }
  return scopeComponent;
}