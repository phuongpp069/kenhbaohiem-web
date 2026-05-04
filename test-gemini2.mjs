const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBAlSGNFn3mpsbWdLFf6kKVeYmEXxZMFgM';

const test = async () => {
  const req = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: 'hi' }] }] })
  });
  console.log(req.status, req.statusText);
  const data = await req.json();
  console.log(JSON.stringify(data));
};

test();
