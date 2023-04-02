import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Web Storage APIs are used by developers to store data into the browser. Now the data here refers to the <b>key-value pair of strings</b> . Now storing this data can be done by 2 mechanisms: either by using <b>the sessionStorage API and the localStorage API.</b>
        </p>

   <h2>Session storage</h2> 
   <p>the data is stored in the browser’s memory for that specific session. Session more here means until you close the browser window. Unlike cookies, the data in sessionStorage is never transferred to the server while making a network request. </p>

<p>The storage limit of session storage is also very high when compared to cookies. The cookies which can generally store around 4000 bytes of data here session storage can store at least 5 MB of data or even more than that depending on the device and browser. Which is a lot!</p>

<h2>LocalStorage</h2> 
<p>it is almost the same as the session storage but the major difference is that it does not have an expiry. So Even if you close the browser and restart your system and come back again anytime the data persists. That makes it unique and very useful. And among these 3, localStorage has higher memory limit.</p>

<p>
It’s used a lot even by many big companies to store some less relevant user-specific data into their browsers. Some companies even use it to optimize the performance of the web page speed as access localStorage is faster than making a request to the server and getting the data.

If you have ever observed many companies like Flipkart and Paytm use localStorage for keeping a lot of data. Flipkart. If you go and check the application tab of your developer console. Then you’ll find out that some information such as browsed products, navigation menu, autosuggest history all this user-specific data is being stored in the local storage.

And if you go and check the localStorage for Paytm you’ll also find that even they store a lot of data such as the recent searches for flights, recent cities you selected and even some session data into localStorage.

One more important thing to note here is that due to security reasons it follows the same-origin policy. Same-Origin refers to the same Protocol, same host, and the same port. 
     </p>
     </header>
    </div>
  );
}

export default App;
