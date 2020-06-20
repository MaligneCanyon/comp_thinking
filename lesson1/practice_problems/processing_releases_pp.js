let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

// rules:
//     Keep only releases that have both id and title data present.
//     Keep only the id and title data for each release.
// abstractions:
// - for an arr of release objs
//   - filter out releases that dont have both id and title data present
//   - map id and title data from the filtered releases
// - return the mapped data

function processReleaseData(data) {
  let validData = data.filter(isValidData);
  return validData.map(release => ({ id: release.id, title: release.title }));
}

// rtn T if the spec'd keys exist and their values are truthy
function isValidData(obj) {
  return Object.keys(obj).includes('id') && obj.id &&
         Object.keys(obj).includes('title') && obj.title;
}

console.log(processReleaseData(newReleases));
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
