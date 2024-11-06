import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const contact = localStorage.getItem("contacts");
if(!contact){
  const response = await fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1XTEEQ5bytY6HxspmkV0c3XhbGxdBhSyI0sZYZ3x1w-w/values:batchGet?ranges=contact!A1%3AB8&key=AIzaSyAShNLW1Hb-yv9AcRaMzzp9SbcHr_YQ2c4"
  );
  localStorage.setItem("contacts_raw",JSON.stringify(await response.json()))
}

const response = await fetch(
  "https://sheets.googleapis.com/v4/spreadsheets/1XTEEQ5bytY6HxspmkV0c3XhbGxdBhSyI0sZYZ3x1w-w/values:batchGet?ranges=business_timings!A1%3AE8&key=AIzaSyAShNLW1Hb-yv9AcRaMzzp9SbcHr_YQ2c4"
);
localStorage.setItem("timings", JSON.stringify(await response.json()));
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
