// remove Special Characters And Replace Spaces
export async function login(params: string) {
    await new Promise((resolve, reject) => {
        fetch('https://example.com/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers required by your API
            },
            body: JSON.stringify(params),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error || false);
        });
    })
}


