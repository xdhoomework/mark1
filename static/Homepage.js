// Helper: check if a modal element is currently open
function _isModalOpen(id) {
    const el = document.getElementById(id);
    return el && el.classList.contains('visible');
}

// Ensure UI state reflects whether any modal is open
function _updateOverlayAndButtons() {
    const anyOpen = _isModalOpen('loginModal') || _isModalOpen('createModal');
    // In the new layout, we don't need to hide background buttons manually 
    // as the modal backdrop covers the screen.
}

function openLogin() {
    // If create modal is open, close it first so only one modal is visible
    const createOpen = _isModalOpen('createModal');
    if (createOpen) {
        document.getElementById('createModal').classList.remove('visible');
    }

    // show login modal and default message (use .visible so transform animates)
    document.getElementById('loginModal').classList.add('visible');
    const err = document.getElementById('error');
    if (err) err.innerText = 'Please enter your credentials';

    _updateOverlayAndButtons();
}

function closeLogin() {
    // hide login modal; overlay stays if another modal is open
    document.getElementById('loginModal').classList.remove('visible');
    _updateOverlayAndButtons();
}

function openCreate() {
    // If login modal is open, close it first, then open create modal
    const loginOpen = _isModalOpen('loginModal');
    if (loginOpen) {
        document.getElementById('loginModal').classList.remove('visible');
    }

    // open create modal (use .visible so transform animates)
    document.getElementById('createModal').classList.add('visible');

    // update overlay/buttons; overlay will remain because create is open
    _updateOverlayAndButtons();
}

function closeCreate() {
    document.getElementById('createModal').classList.remove('visible');
    _updateOverlayAndButtons();
}

// Optional navigation helper left in place
function openMakeId() {
    window.location.href = 'makeid.html';
}