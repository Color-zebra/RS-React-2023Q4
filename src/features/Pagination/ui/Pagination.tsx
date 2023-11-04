import { RootButton } from '../../../shared/ui/RootButton';
import { RootTextField } from '../../../shared/ui/RootTextField';
import classes from './Pagination.module.scss';

interface Props {
  currPage: number;
  lastPage: number;
  changePage: (page: number) => void;
}

export const Pagination = (props: Props) => {
  const { currPage, lastPage, changePage } = props;
  console.log(currPage);
  console.log(lastPage);

  return (
    <div className={classes.pagination}>
      <RootButton
        disabled={currPage <= 1}
        onClick={() => changePage(currPage - 1)}
      >
        &lt;
      </RootButton>
      <RootTextField>{currPage}</RootTextField>
      <RootButton
        disabled={currPage >= lastPage}
        onClick={() => changePage(currPage + 1)}
      >
        &gt;
      </RootButton>
    </div>
  );
};
