//time & greeting function
const greeting = document.querySelector("#greeting");
greeting.style.color = "#ff0000"; // Yellow text color

function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0"); // Ensures two digits for minutes
    const seconds = now.getSeconds().toString().padStart(2, "0"); // Ensures two digits for seconds

    // Determine the greeting message
    if (hour >= 5 && hour < 12) {
        greeting.innerText = "អារុណសួស្តី!";
    } else if (hour >= 12 && hour < 17) {
        greeting.innerText = "ទិវាសួស្តី!";
    } else if (hour >= 17 && hour < 21) {
        greeting.innerText =" សាយណ្ណសួស្តី!";
    } else {
        greeting.innerText = "រាត្រីសួស្តី!";
    }

    // Create or update the time display
    let time = document.querySelector("#current-time");
    if (!time) {
        time = document.createElement("span");
        time.id = "current-time"; // Add an ID for easy access
        greeting.appendChild(document.createElement("br")); // Line break for readability
        greeting.appendChild(time);
    }
    time.innerText = `${hour}:${minutes}:${seconds}`;
    time.style.color = "rgb(255, 215, 0)"; // Yellow text color
}

// Update the greeting and time immediately
updateGreeting();

// Update the greeting and time every second
setInterval(updateGreeting, 1000);


//calculate change price
//declear rate
const rate = document.querySelector("#rate");
rate.innerHTML = 6.1;
rate.style.color = "#ff0000";

//declear btn
// Select all inputs and the button
const inputs = document.querySelectorAll("input");
const btn1 = document.getElementById("btn1");

// Functionality for btn1 click
btn1.addEventListener("click", () => {
  const inputPrice1 = parseFloat(
    document.getElementById("inputPrice1").value || 0
  );
  const inputPrice2 = parseFloat(
    document.getElementById("inputPrice2").value || 0
  );
  const rate = parseFloat(document.querySelector("#rate").innerText || 1); // Default rate if empty

  const convertPrice = (inputPrice1 / rate).toFixed(2);
  const convertPriceText = document.querySelector("#convertPriceText");
  convertPriceText.innerText = convertPrice;

  const changePriceText = document.querySelector("#changePriceText");
  const changePrice = (convertPrice - inputPrice2).toFixed(2);

  changePrice > 0
    ? (changePriceText.style.color = "#FFD700")
    : (changePriceText.style.color = "#FF0000");
  changePriceText.innerText = changePrice;
});

// Clear inputs and results when Escape or Delete key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Delete") {
    // Clear all input fields
    document.getElementById("inputPrice1").value = "";
    document.getElementById("inputPrice2").value = "";

    // Clear displayed results
    document.querySelector("#convertPriceText").innerText = "";
    document.querySelector("#changePriceText").innerText = "";
  }
});



//copyPaste
btn2.addEventListener("click", () => {
  if (convertPriceText) {
    // Create the notification div element
    const noti = document.createElement("div");
    noti.style.position = "fixed";
    noti.style.top = "20px";
    noti.style.left = "50%";
    noti.style.padding = "10px";
    noti.style.backgroundColor = "rgb(255, 215, 0)"; // Green background for success
    noti.style.color = "white";
    noti.style.fontSize = "16px";
    noti.style.borderRadius = "5px";
    noti.style.zIndex = "9999"; // Ensure it's on top of other content

    // Write the text from the element to the clipboard
    navigator.clipboard
      .writeText(convertPriceText.innerText)
      .then(() => {
        // Display success notification
        noti.innerText = "Text copied to clipboard!";
        document.body.appendChild(noti);

        // Remove the notification after 3 seconds
        setTimeout(() => {
          noti.remove();
        }, 3000);
      })
      .catch((err) => {
        // Display error notification
        noti.innerText = "Failed to copy text.";
        noti.style.backgroundColor = "#FF0000"; // Red background for error
        document.body.appendChild(noti);

        // Remove the error notification after 3 seconds
        setTimeout(() => {
          noti.remove();
        }, 3000);

        console.error("Failed to copy: ", err);
      });
  } else {
    console.error("Element with id 'convertPriceText' not found.");
  }
});



btn3.addEventListener("click", () => {
  if (convertPriceText) {
    // Create the notification div element
    const noti = document.createElement("div");
    noti.style.position = "fixed";
    noti.style.top = "20px";
    noti.style.left = "50%";
    noti.style.padding = "10px";
    noti.style.backgroundColor = "#4CAF50"; // Green background for success
    noti.style.color = "white";
    noti.style.fontSize = "16px";
    noti.style.borderRadius = "5px";
    noti.style.zIndex = "9999"; // Ensure it's on top of other content

    // Write the text from the element to the clipboard
    navigator.clipboard
      .writeText(changePriceText.innerText)
      .then(() => {
        // Display success notification
        noti.innerText = "Text copied to clipboard!";
        document.body.appendChild(noti);

        // Remove the notification after 3 seconds
        setTimeout(() => {
          noti.remove();
        }, 3000);
      })
      .catch((err) => {
        // Display error notification
        noti.innerText = "Failed to copy text.";
        noti.style.backgroundColor = "#FF0000"; // Red background for error
        document.body.appendChild(noti);

        // Remove the error notification after 3 seconds
        setTimeout(() => {
          noti.remove();
        }, 3000);

        console.error("Failed to copy: ", err);
      });
  } else {
    console.error("Element with id 'convertPriceText' not found.");
  }
});

// Subtotal calculator 
const btn = document.getElementById("btn");
const result = document.querySelector("#result");

// Create a new result0 element
const result0 = document.createElement("div");
result0.className = "result0";

// Insert result0 before result
result.parentNode.insertBefore(result0, result);

btn.addEventListener('click', () => {
    const Erate = parseFloat(document.getElementById("Erate").value || 0);
    const input = parseFloat(document.getElementById("input").value || 0);

    if (Erate === 0) {
        result0.innerText = "Error: Exchange rate cannot be zero.";
        result0.style.color = "red";
        return;
    }

    const price = (input / Erate).toFixed(4);
    const price1 = (input / Erate).toFixed(2);

    result0.innerText = price;
    result.innerText = `សួស្តីបង សរុបហាងទំនិញទាំងអស់ $${price1} \n	
  \n\n***បញ្ជាក់: ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា
   \សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន។​​ ម្យ៉ាងវិញទៀតខាងប្អូនធានាទៅលើតែឥវ៉ាន់ដែលបាត់បង់ \
   មិនធានាទៅលើឥវ៉ាន់ដែលបែកបាក់នោះទេ\
  \n ចំពោះសេវាជួយទិញតាមតេលេក្រាមពុំមានការបង្រួមកញ្ចប់ទំនិញចូលគ្នាទេបង។`;

    result.className = 'tag is-success is-light is-size-4';
});


//copyText
function copyText(id) {
  const text = document.getElementById(id);
  navigator.clipboard.writeText(text.textContent)
      .then(() => {
          // Create a success message element
          let copySuccessText = document.getElementById("copy-success");
          if (!copySuccessText) {
              copySuccessText = document.createElement("span");
              copySuccessText.id = "copy-success";
              const button = document.querySelector("button[onclick*='copyText']"); // Target the last button
              button.parentNode.appendChild(copySuccessText);
          }
          copySuccessText.textContent = "Text copied!";
          copySuccessText.style.visibility = "visible";
          copySuccessText.style.marginLeft= "10px";
          copySuccessText.style.border= "1px solid  rgb(255, 215, 0)"; 
     /*      copySuccessText.style.backgroundColor= " #ff0000";  */  
          copySuccessText.style.borderRadius = "10px";
          copySuccessText.style.color= "green";
        

          // Hide the message after 2 seconds
          setTimeout(() => {
              copySuccessText.style.visibility = "hidden";
          }, 2000);
      })
      .catch(err => console.error('Failed to copy:', err));
}





// Get footer element and create an element for the date and time
const footer = document.querySelector("footer");
const dateFormat = document.createElement("h5");
footer.appendChild(dateFormat);

// Function to update time and date
function updateTime() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Create or update the time span
  let time = document.querySelector("#current-time");
  if (!time) {
    time = document.createElement("span");
    time.id = "current-time"; // Add an ID for easy access
    dateFormat.appendChild(document.createElement("br")); // Line break for readability
    dateFormat.appendChild(time); // Append to the dateFormat element
  }
  time.innerText = `${hour}:${minutes}:${seconds}`;
  time.style.color = "rgb(255, 215, 0)"; // Yellow text color

  // Get current date in a specific format (e.g., "Wed, Jan 1, 2025")
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric', 
    month: 'short',
    day: 'numeric'
  });

  // Set date text and initial color
  dateFormat.innerText = date + " " + time.innerText;
  dateFormat.style.color = "rgb(255, 215, 0)"; // Default color

  // Special handling for specific dates
  if (date.toLowerCase().includes('jan 1, 2025')) {
    console.log("Happy New Year");
    dateFormat.style.color = "red"; // Change color for New Year
  } else if (date.toLowerCase().includes('jan 29, 2025') ||
             date.toLowerCase().includes('jan 30, 2025') ||
             date.toLowerCase().includes('jan 31, 2025')) {
    dateFormat.style.color = "rgb(255, 215, 0)"; // Yellow color for Chinese New Year
    const dateCelebration = document.createElement("span");
    dateCelebration.innerText = "Happy Chinese New Year 🎆🎆";
    dateFormat.appendChild(dateCelebration); // Append the celebration message
  }
}

// Update the time and date every second
setInterval(updateTime, 1000);

// Run once initially to display time without waiting for the interval
updateTime();