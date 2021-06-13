function postPageTitle(pageName) {
  let title = '';
  switch (pageName) {
    case 'travel':
      title = 'Travel is refresh';
      break;
    case 'movie':
      title = 'Movie review';
      break;
    case 'tech':
      title = 'Tech storage';
      break;
    default:
      title = '';
      break;
  }
  return title;
}

export default {
  postPageTitle,
};