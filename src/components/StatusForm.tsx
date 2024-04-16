import StatusAddingDialog from './status/StatusAddingDialog';
import StatusSelection from './status/StatusSelection';

export default function StatusForm() {
  return (
    <>
      <StatusSelection />
      <StatusAddingDialog />
    </>
  );
}
