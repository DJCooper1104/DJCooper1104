// PART 1: CREATE THE SEARCH FUNCTION
// This is our main function that does the searching
function doGoogleSearch() {
    // Step 1: Get the search box from our webpage
    // Think of getElementById as a way to "grab" something from your HTML page
    let searchBox = document.getElementById('searchInput');

    // Step 2: Get what the user typed into the search box
    let userSearchText = searchBox.value;

    // Step 3: Remove any extra spaces from the beginning and end
    let cleanSearchText = userSearchText.trim();

    // Step 4: Check if the user actually typed something
    if (cleanSearchText !== '') {
        // Step 5: Create the special Google web address (URL)
        // First part: The main Google search address
        let googleAddress = 'https://www.google.com/search?q=';

        // Second part: Make the search text safe for a web address
        // URL encoding: Converts spaces and special characters to be web-friendly
        // Example: "hello world" becomes "hello%20world"
        let safeSearchText = encodeURIComponent(cleanSearchText);

        // Step 6: Combine the Google address and the safe search text
        let fullSearchAddress = googleAddress + safeSearchText;

        // Step 7: Send the user to Google with their search
        // This line is like clicking a link to Google
        window.location.href = fullSearchAddress;
    }
}

// PART 2: SET UP THE ENTER KEY
// This part lets the user press Enter to search

// Step 1: Get the search box again
let searchBox = document.getElementById('searchInput');

// Step 2: Tell the computer to listen for when someone presses a key
// This is called an "event listener" - it listens for something to happen
searchBox.addEventListener('keypress', function(event) {
    // This code runs every time a key is pressed

    // Step 3: Check if the key that was pressed is Enter
    // The Enter key is special - it's like clicking the search button
    if (event.key === 'Enter') {
        // Step 4: If it was Enter, do the search
        doGoogleSearch();
    }
});

/* 
    HOW THIS CODE WORKS (The Big Picture):

    Imagine our code is like a recipe for making a search happen:

    When Someone Clicks the Search Button:
    1. The doGoogleSearch() function runs
    2. It gets what was typed in the search box
    3. It cleans up the text (removes extra spaces)
    4. It makes the text safe for a web address
    5. It creates the full Google search address
    6. It takes you to Google with your search

    When Someone Presses Enter:
    1. The computer is always watching for keys being pressed
    2. When it sees the Enter key, it runs doGoogleSearch()
    3. Then the same steps happen as above

    Think of it like this:
    - The search box is like a mailbox
    - Your search text is like a letter
    - The code is like a mail carrier who:
      * Takes your letter (search)
      * Puts it in the right format (makes it web-safe)
      * Delivers it to Google
*/