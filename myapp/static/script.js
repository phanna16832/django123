const inputPrice1 = document.getElementById("inputPrice1");
const inputPrice2 = document.getElementById("inputPrice2");
const rate = document.getElementById("rate");
const convertPriceText = document.getElementById("convertPriceText");
const changePriceText = document.getElementById("changePriceText");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
  const price1 = parseFloat(inputPrice1.value) || 0;
  const price2 = parseFloat(inputPrice2.value) || 0;
  setRate =6.1;
  rate.innerText = setRate;
  calPrice = (price1 /setRate).toFixed(2);
  newPrice = (calPrice-price2).toFixed(2);
  changePriceText.className = newPrice > 0 ? "text-danger" : "text-sucess";
  convertPriceText.innerHTML = calPrice;
  changePriceText.innerHTML = newPrice;
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
