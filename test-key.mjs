const url = 'https://generativelanguage.googleapis.com/v1beta/models?key=' + process.env.GEMINI_API_KEY;

const test = async () => {
    const req = await fetch(url);
    const data = await req.json();
    console.log(data);
};
test();
