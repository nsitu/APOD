# APOD
This is a basic example to demonstrate the Nasa Astronomy Picture of the Day. It uses Axios to make Requests. Although it's possible to access NASA APIs directly from the frontend, we are using NodeJS to relay so that we can keep our credentials safe in the backend environment.

# Environment
In your NodeJS Environment, add the following variables:
API_KEY - You can generate one for free at [https://api.nasa.gov/](https://api.nasa.gov/)
ROOT_URL - If your environment places your app in a "subfolder" (e.g. CPanel), specify it here. Otherwise leave it blank.
