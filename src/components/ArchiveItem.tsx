import ArchiveItemLabel from './ArchiveItemLabel';

import { ArchiveItem as IArchiveItem } from '../data/types';

function ArchiveItem({ archiveItem }: { archiveItem: IArchiveItem }) {
  return (
    <li>
      <span style={{ fontFamily: 'monospace' }}>{archiveItem.date}</span>:{' '}
      {archiveItem.url ? (
        <a href={archiveItem.url} target='_blank' rel='noreferrer noopener'>
          <ArchiveItemLabel archiveItem={archiveItem} />
        </a>
      ) : (
        <ArchiveItemLabel archiveItem={archiveItem} />
      )}
      {archiveItem.infoLink && (
        <>
          {' '}
          <a href={archiveItem.infoLink}>
            <code
              style={{
                fontFamily: 'monospace',
                color: '#ff4f70',
                textDecoration: 'none'
              }}
            >
              [i]
            </code>
          </a>
        </>
      )}
    </li>
  );
}

export default ArchiveItem;
