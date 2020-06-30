// Implement a function that checks whether an email address is valid. An email address has two parts:
// A "local part" and a "domain part." An @ sign separates the two parts: local-part@domain-part. The
// local part is the name of the mailbox; this is usually a username. The domain part is the domain
// name (e.g., gmail.com, yahoo.com.ph, or myCompanyName.com). The domain name contains a server name
// (sometimes called the mail server name) and a top-level domain (.com, .ph, etc.).

// For this practice problem, use the following criteria to determine whether an email address is valid:
//     There must be one @ sign.
//     The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). It may not
//     contain any other characters.
//     The domain part must contain two or more components with a single dot (.) between each component.
//     Each component must contain one or more letters (A-Z, a-z) only.

// abstractions:
// - test whether the str contains exactly 1 @ symbol
// - split the str into a local-part and domain-part
// - test whether the local-part contains 1+ letters and/or digits and no other chars
// - test whether the domain-part contains 1+ dots
// - split the domain-part into an arr of components
// - test whether each component contains 1+ letters and no other chars
// - if any test fails, rtn F; otherwise rtn true

// function isValidEmail(email) {
//   let local;
//   let domain;
//   let arr;

//   if ((email.match(/@/) || []).length !== 1) return false; // found zero or >1 '@' symbols
//   [local, domain] = email.split('@');
//   if (/[\W_]/.test(local)) return false; // found non-word char or underscore
//   if (/\w/.test(local)) { // found at least one letter or digit
//     if (/\./.test(domain)) { // found one or more dots
//       arr = domain.split('.');
//       if (arr.some(elem => (/[^a-z]/i).test(elem))) return false; // found a non-letter in a domain component
//       if (arr.every(elem => (/[a-z]/i).test(elem))) return true; // found >=1 letter char in every domain component
//     }
//   }
//   return false;
// }

// Solution:
function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
