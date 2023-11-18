import { RootButton } from '../../../shared/ui/RootButton';
import classes from './FallBackPage.module.scss';
import img from '../../../shared/assets/images/fallback-back.jpg';

const FallBackPage = () => {
  const updatePage = () => {
    location.reload();
  };

  return (
    <main className={classes.page} style={{ backgroundImage: `url(${img})` }}>
      <div className={classes.content}>
        <p>Looks like everything is broken :&#40;</p>
        <RootButton onClick={updatePage}>Update page</RootButton>
      </div>
    </main>
  );
};

export default FallBackPage;
