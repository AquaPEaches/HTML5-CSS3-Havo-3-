
/**
 * //IT IS JUST SUPPOSED TO BE HERE TO MAKE THE SEARCH BAR INTERACTIVE!!!!!
 * //THIS IS NOT SUPPOSED TO BE A REAL DATABANK 
 * */


function saveEmail() {
    const email = document.getElementById('emailInput').value.trim();

    // Check if email is provided
    if (email === '') {
        alert('Please enter an email address.');
        return;
    }

    // Get existing emails from localStorage
    let savedEmails = localStorage.getItem('savedEmails');
    savedEmails = savedEmails ? JSON.parse(savedEmails) : [];

    // Add the new email to the list
    savedEmails.push(email);

    // Save the updated list back to localStorage
    localStorage.setItem('savedEmails', JSON.stringify(savedEmails));

    // Display the saved emails with indices
    const displayList = savedEmails.map((email, index) => `${index + 1}. ${email}`).join('\n');
    console.log('Saved Emails:\n', displayList);

    alert('Email saved successfully!');
    document.getElementById('emailInput').value = ''; // Clear input field
}