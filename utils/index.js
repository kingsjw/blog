function zeros(n) {
  const length = n.toString().length;
  return `${length < 2 ? '0' : ''}${n}`;
}


function getPostPageTitle(pageName) {
  let title = '';
  switch (pageName) {
    case 'travel':
      title = 'Travel storage';
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

function ymdDateFormat(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${zeros(d.getMonth() + 1)}-${zeros(d.getDate())}`;
}

export {
  ymdDateFormat,
  getPostPageTitle,
};