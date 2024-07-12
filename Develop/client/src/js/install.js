// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {});

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});


// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {

// });

const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Save the event so it can be triggered later
  deferredPrompt = event;
  // Remove the hidden class from the install button
  butInstall.style.display = 'block';

  console.log('👍', 'beforeinstallprompt', event);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }

  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  console.log('👍', 'userChoice', outcome);
  // Reset the deferredPrompt variable, since it can only be used once
  deferredPrompt = null;
  // Hide the install button
  butInstall.style.display = 'none';
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  // Clear the deferredPrompt variable
  deferredPrompt = null;
});










// const installBtn = document.getElementById('installBtn');
// const textHeader = document.getElementById('textHeader');

// window.addEventListener('beforeinstallprompt', (event) => {
//   event.preventDefault();
//   installBtn.style.visibility = 'visible';
//   textHeader.textContent = 'Click the button to install!';

//   installBtn.addEventListener('click', () => {
//     event.prompt();
//     installBtn.setAttribute('disabled', true);
//     installBtn.textContent = 'Installed!';
//   });
// });

// window.addEventListener('appinstalled', (event) => {
//   textHeader.textContent = 'Successfully installed!';
//   console.log('👍', 'appinstalled', event);
// });