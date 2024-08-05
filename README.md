1.  Clone the repository to your local machine:

    ```
    github.com/satyamkale27/DoggoFinder.git
    ```

2.  Navigate to the project directory:

    ```
    cd DoggoFinder
    ```

3.  In your code, make sure to replace "Add your API key" with your actual API key. For example:

         App.js

                const res = await fetch(
                  `https://api.api-ninjas.com/v1/dogs?name=${query}`,
                  {
                    signal: controllers.signal,
                    headers: {
                      "X-Api-Key": "your-api-key",
                    },
                  }
                );

4.  get your API key from [API Ninjas](https://api-ninjas.com/api/dogs)

5.  Install the project dependencies:

    ```
    npm install
    ```

6.  Start the development server:

    ```
    npm start
    ```

7.  Open your browser and visit `http://localhost:3000` to view the project.

That's it! You have successfully set up your project and added the API key. Happy coding!
