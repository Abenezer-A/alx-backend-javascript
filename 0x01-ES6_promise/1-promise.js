export default function getFullResponseFromAPI(success) {
  return new Promise((resol, fail) => {
    if (success) {
      resol({
        status: 200,
        body: 'Success',
      });
    } else {
      fail(new Error('The fake API is not working currently'));
    }
  });
}
