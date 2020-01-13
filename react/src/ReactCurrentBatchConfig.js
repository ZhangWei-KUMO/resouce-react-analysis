
import type { SuspenseConfig } from 'react-reconciler/src/ReactFiberSuspenseConfig';

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
const ReactCurrentBatchConfig = {
  suspense: (null: null | SuspenseConfig),
};

export default ReactCurrentBatchConfig;