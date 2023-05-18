export class State {

    static useState(initialValue) {
        let state = initialValue; // Store the current state

        // Define a setter function that updates the state and triggers re-rendering
        function setState(newValue) {
            state = newValue;
            render(); // Call your render function here (replace "render" with your actual rendering logic)
        }

        // Return an array with the current state value and the setter function
        return [state, setState];
    }



}