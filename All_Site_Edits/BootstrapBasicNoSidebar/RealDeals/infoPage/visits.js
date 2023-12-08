// initialize display elements
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numberOfVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numberOfVisits !== 0) {
  visitsDisplay.textContent = numberOfVisits;
} else {
  visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numberOfVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numberOfVisits);
// show todays date.
let todayDisplay = Date.now();

/////////////////////////////////////////////////////////////////////////////

// Adding the Days Between Visits

let dateofvisit = new Date();

window.localStorage.setItem("date", dateofvisit.getTime());

let date1 = window.localStorage.getItem("date");

let date2 = new Date();

let Difference_In_Time = date2.getTime() - date1;

let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

console.log(Difference_In_Days);

document.querySelector(".dbvisits").innerHTML = Difference_In_Days;

// <script>
//     function setCookie(name, value, days) {
//         let expires = "";
//         if (days) {
//         let date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//         }
//         document.cookie = name + "=" + value + expires + "; path=/";
//     }

//     function getCookie(name) {
//         let nameEQ = name + "=";
//         let ca = document.cookie.split(';');
//         for(let i=0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//         }
//         return null;
//     }

//     // Function to check if the user has visited the site less than 10 times
//     function checkVisitCount() {
//         const visitCount = getCookie('visitCount');
//         if (!visitCount) {
//         visitCount = 0;
//         }

//         visitCount = parseInt(visitCount);

//         if (visitCount < 10) {
//         // Increment visit count
//         visitCount++;
//         setCookie('visitCount', visitCount, 365); // Set cookie to expire in 365 days

//         // Add iframe to the page
//         let iframe = document.createElement('iframe');
//         iframe.src = 'https://www.alphagraphicsmarketing.com/RealDeals/IntroHomePage.mp4';
//         iframe.width = '600';
//         iframe.height = '400';
//         document.body.appendChild(iframe);
//         }
//     }

//     // Call the function on page load
//     window.onload = checkVisitCount;
// </script>
