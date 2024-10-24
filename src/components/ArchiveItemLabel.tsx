import { ArchiveItem } from '../data/types';

function ArchiveItemLabel({ archiveItem }: { archiveItem: ArchiveItem }) {
  return (
    <>
      {archiveItem.label}
      {archiveItem.secondaryText && (
        <>
          {' '}
          <em style={{ fontSize: '13px' }}>({archiveItem.secondaryText})</em>
        </>
      )}
    </>
  );
}

export default ArchiveItemLabel;
