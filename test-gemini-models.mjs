const url = 'https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyBAlSGNFn3mpsbWdLFf6kKVeYmEXxZMFgM';

const test = async () => {
  try {
    const req = await fetch(url);
    const data = await req.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
};
test();
