import classes from './InlineChip.module.scss';

function InlineChip({ text }: { text?: string }) {
  return <span className={classes.root}>{text || 'New!'}</span>;
}

export default InlineChip;
